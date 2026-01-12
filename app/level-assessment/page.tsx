'use client'

import { useMemo, useState, useEffect, useRef } from 'react'
import { getRandomAssessmentQuestions } from '@/lib/levelAssessmentQuestions'
import type { Question } from '@/types'
import { FiCheckCircle, FiXCircle, FiTrendingUp, FiClock, FiArrowRight, FiPlay, FiPause, FiVolume2 } from 'react-icons/fi'

type AssessmentState = 'in-progress' | 'finished'

type StepEstimate = {
  percentage: number
  estimatedScore: number
  band: string
  description: string
}

function estimateStepScore(correct: number, total: number): StepEstimate {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0

  // Simple linear mapping to STEP-like score out of 100
  const estimatedScore = Math.round(percentage)

  let band = ''
  let description = ''

  if (percentage < 40) {
    band = 'Beginner'
    description = 'Beginner level. You need to focus on building vocabulary and basic grammar before attempting the STEP exam.'
  } else if (percentage < 60) {
    band = 'Pre-Intermediate'
    description = 'Pre-intermediate level. You can start serious STEP preparation, but there are still gaps that need to be addressed.'
  } else if (percentage < 75) {
    band = 'Intermediate'
    description = 'Intermediate level. You can likely achieve a score between 60–75 on STEP with good preparation.'
  } else if (percentage < 90) {
    band = 'Upper-Intermediate'
    description = 'Upper-intermediate level. You can expect an approximate score between 75–85 on STEP if you maintain your level and practice with real exam samples.'
  } else {
    band = 'Advanced'
    description = 'Advanced level. You can expect a score above 85 on STEP with some focused review.'
  }

  return { percentage, estimatedScore, band, description }
}

export default function LevelAssessmentPage() {
  const questions = useMemo<Question[]>(() => getRandomAssessmentQuestions(15), [])
  const [answers, setAnswers] = useState<Record<number, number | null>>({})
  const [state, setState] = useState<AssessmentState>('in-progress')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(60) // 60 seconds = 1 minute
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [audioPlayed, setAudioPlayed] = useState<Record<number, boolean>>({})
  const synthRef = useRef<SpeechSynthesis | null>(null)

  const totalQuestions = questions.length
  const currentQuestion = questions[currentQuestionIndex]
  const answeredCount = Object.values(answers).filter((v) => v !== null && v !== undefined).length

  const { correctCount, estimate } = useMemo(() => {
    let correct = 0
    questions.forEach((q) => {
      const userAnswer = answers[q.id]
      if (userAnswer === q.correctAnswer) correct += 1
    })
    return {
      correctCount: correct,
      estimate: estimateStepScore(correct, totalQuestions || 15),
    }
  }, [answers, questions, totalQuestions])

  // Timer countdown for current question
  useEffect(() => {
    if (state === 'finished' || !currentQuestion) return

    if (timeRemaining <= 0) {
      // Time's up, move to next question automatically
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      } else {
        setState('finished')
      }
      return
    }

    const interval = setInterval(() => {
      setTimeRemaining((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timeRemaining, state, currentQuestion, currentQuestionIndex, totalQuestions])

  // Reset timer when moving to next question
  useEffect(() => {
    if (state === 'in-progress' && currentQuestion) {
      setTimeRemaining(60)
      setIsPlayingAudio(false)
      // Stop any playing audio
      if (synthRef.current) {
        synthRef.current.cancel()
      }
    }
  }, [currentQuestionIndex, state, currentQuestion])

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis
    }
  }, [])

  const playAudio = () => {
    if (!currentQuestion || !currentQuestion.audioText) return

    if (synthRef.current) {
      // Stop any current speech
      synthRef.current.cancel()
      
      const utterance = new SpeechSynthesisUtterance(currentQuestion.audioText)
      utterance.lang = 'en-US'
      utterance.rate = 0.9 // Slightly slower for clarity
      utterance.pitch = 1
      utterance.volume = 1

      utterance.onstart = () => {
        setIsPlayingAudio(true)
        setAudioPlayed((prev) => ({ ...prev, [currentQuestion.id]: true }))
      }

      utterance.onend = () => {
        setIsPlayingAudio(false)
      }

      utterance.onerror = () => {
        setIsPlayingAudio(false)
      }

      synthRef.current.speak(utterance)
    }
  }

  const stopAudio = () => {
    if (synthRef.current) {
      synthRef.current.cancel()
      setIsPlayingAudio(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (state === 'finished') return
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      // Last question, finish test
      handleFinish()
    }
  }

  const handleFinish = () => {
    setState('finished')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quick Level Assessment Test</h1>
          <p className="text-gray-600">
            Answer 15 questions covering vocabulary, grammar, reading, and listening. At the end, we'll show you
            an estimate of your level and expected percentage on STEP.
          </p>
        </div>

        {/* Stats / Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="text-sm text-gray-500 mb-1">Total Questions</p>
            <p className="text-2xl font-bold text-gray-900">{totalQuestions}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="text-sm text-gray-500 mb-1">Answered</p>
            <p className="text-2xl font-bold text-gray-900">
              {answeredCount} / {totalQuestions}
            </p>
          </div>
          {state === 'finished' && (
            <div className="bg-primary-600 rounded-lg shadow-sm p-4 text-white flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80 mb-1">Estimated STEP Score</p>
                <p className="text-2xl font-bold">{estimate.estimatedScore} / 100</p>
              </div>
              <FiTrendingUp className="w-10 h-10 opacity-90" />
            </div>
          )}
        </div>

        {/* Current Question */}
        {state === 'in-progress' && currentQuestion && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500">
                  {currentQuestion.section === 'vocabulary'
                    ? 'Vocabulary'
                    : currentQuestion.section === 'grammar'
                    ? 'Grammar'
                    : currentQuestion.section === 'reading'
                    ? 'Reading'
                    : 'Listening'}
                  {' • '}
                  {currentQuestion.difficulty === 'beginner'
                    ? 'Beginner'
                    : currentQuestion.difficulty === 'intermediate'
                    ? 'Intermediate'
                    : 'Advanced'}
                </span>
                <span className={`flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded ${
                  timeRemaining <= 10 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-primary-600 bg-primary-50'
                }`}>
                  <FiClock className="w-4 h-4" />
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
            
            {/* Audio Player for Listening Questions */}
            {currentQuestion.section === 'listening' && (
              <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={isPlayingAudio ? stopAudio : playAudio}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      {isPlayingAudio ? (
                        <FiPause className="w-5 h-5" />
                      ) : (
                        <FiPlay className="w-5 h-5 ml-0.5" />
                      )}
                    </button>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                        <FiVolume2 className="w-4 h-4 text-primary-600" />
                        Listen to the audio
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {audioPlayed[currentQuestion.id] ? 'Click to replay' : 'Click the play button to hear the audio'}
                      </p>
                    </div>
                  </div>
                  {currentQuestion.audioUrl && (
                    <audio 
                      controls 
                      className="hidden"
                      onPlay={() => setIsPlayingAudio(true)}
                      onPause={() => setIsPlayingAudio(false)}
                      onEnded={() => setIsPlayingAudio(false)}
                    >
                      <source src={currentQuestion.audioUrl} type="audio/mpeg" />
                    </audio>
                  )}
                </div>
              </div>
            )}

            <p className="text-lg font-medium text-gray-900 mb-6">{currentQuestion.question}</p>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((opt, optIndex) => {
                const isSelected = answers[currentQuestion.id] === optIndex

                return (
                  <button
                    key={optIndex}
                    type="button"
                    onClick={() => handleSelect(currentQuestion.id, optIndex)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition flex items-center justify-between ${
                      isSelected
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="flex-1 text-gray-900 text-left">{opt}</span>
                    <span
                      className={`w-6 h-6 rounded-full border-2 ml-3 flex items-center justify-center ${
                        isSelected
                          ? 'border-primary-600 bg-primary-600'
                          : 'border-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-white block" />
                      )}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {currentQuestionIndex < totalQuestions - 1 ? (
                  <>
                    Next Question
                    <FiArrowRight className="w-5 h-5" />
                  </>
                ) : (
                  'Finish Test'
                )}
              </button>
            </div>
          </div>
        )}

        {/* Show all questions with results after finishing */}
        {state === 'finished' && (
          <div className="space-y-6">
            {questions.map((q, index) => {
              const selected = answers[q.id]
              const isCorrect = selected === q.correctAnswer
              const showFeedback = selected !== null && selected !== undefined

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-xl shadow-sm p-6 border ${
                    showFeedback
                      ? isCorrect
                        ? 'border-green-500'
                        : 'border-red-400'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                      Question {index + 1}
                    </span>
                    <span className="text-xs text-gray-500">
                      {q.section === 'vocabulary'
                        ? 'Vocabulary'
                        : q.section === 'grammar'
                        ? 'Grammar'
                        : q.section === 'reading'
                        ? 'Reading'
                        : 'Listening'}
                      {' • '}
                      {q.difficulty === 'beginner'
                        ? 'Beginner'
                        : q.difficulty === 'intermediate'
                        ? 'Intermediate'
                        : 'Advanced'}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-4">{q.question}</p>

                  <div className="space-y-2">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = selected === optIndex
                      const isRightAnswer = q.correctAnswer === optIndex

                      let baseClasses =
                        'w-full text-left p-3 rounded-lg border-2 transition flex items-center justify-between'

                      if (isRightAnswer) {
                        baseClasses += ' border-green-600 bg-green-50'
                      } else if (isSelected && !isRightAnswer) {
                        baseClasses += ' border-red-500 bg-red-50'
                      } else {
                        baseClasses += ' border-gray-200'
                      }

                      return (
                        <div key={optIndex} className={baseClasses}>
                          <span className="flex-1 text-gray-900 text-left">{opt}</span>
                          <span
                            className={`w-6 h-6 rounded-full border-2 ml-3 flex items-center justify-center ${
                              isSelected
                                ? isCorrect
                                  ? 'border-green-600 bg-green-600'
                                  : 'border-red-500 bg-red-500'
                                : isRightAnswer
                                ? 'border-green-600 bg-green-600'
                                : 'border-gray-300'
                            }`}
                          >
                            {(isSelected || isRightAnswer) && (
                              <span className="w-2 h-2 rounded-full bg-white block" />
                            )}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {showFeedback && (
                    <div
                      className={`mt-4 p-3 rounded-lg flex items-center text-sm ${
                        isCorrect
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <FiCheckCircle className="mr-2 w-5 h-5" />
                          <span>Correct answer, excellent!</span>
                        </>
                      ) : (
                        <>
                          <FiXCircle className="mr-2 w-5 h-5" />
                          <span>
                            Incorrect answer. The correct answer is option{' '}
                            {q.correctAnswer + 1}.
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Final result */}
        {state === 'finished' && (
          <div className="mt-8 space-y-6">
            {/* Main Result Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                  <FiTrendingUp className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Assessment Complete!</h2>
                <p className="text-primary-100">Here's your English level assessment</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-sm text-primary-100 mb-2">Your Score</p>
                  <p className="text-4xl font-bold">{correctCount}/{totalQuestions}</p>
                  <p className="text-sm text-primary-200 mt-1">{estimate.percentage}%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-sm text-primary-100 mb-2">Estimated Level</p>
                  <p className="text-3xl font-bold">{estimate.band}</p>
                  <p className="text-xs text-primary-200 mt-1">English Proficiency</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-sm text-primary-100 mb-2">STEP Score</p>
                  <p className="text-4xl font-bold">{estimate.estimatedScore}</p>
                  <p className="text-xs text-primary-200 mt-1">Out of 100</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-primary-100 mb-2">Assessment Summary</p>
                <p className="text-white leading-relaxed">{estimate.description}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Overall Progress</span>
                  <span className="text-sm font-bold text-primary-600">{estimate.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      estimate.percentage >= 75 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      estimate.percentage >= 50 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      'bg-gradient-to-r from-orange-500 to-orange-600'
                    }`}
                    style={{ width: `${estimate.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}





