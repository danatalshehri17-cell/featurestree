'use client'

import { useState } from 'react'
import { FiBook, FiTarget, FiAward, FiCheckCircle, FiXCircle, FiStar } from 'react-icons/fi'

type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const practiceQuestions: Record<string, Question[]> = {
  vocabulary: [
    {
      id: 1,
      question: 'What does "ubiquitous" mean?',
      options: ['Rare', 'Everywhere', 'Expensive', 'Beautiful'],
      correctAnswer: 1,
      explanation: '"Ubiquitous" means present, appearing, or found everywhere.'
    },
    {
      id: 2,
      question: 'Choose the synonym for "abundant":',
      options: ['Scarce', 'Plentiful', 'Limited', 'Rare'],
      correctAnswer: 1,
      explanation: '"Abundant" means existing in large quantities; plentiful.'
    },
  ],
  grammar: [
    {
      id: 1,
      question: 'Choose the correct form: "I _____ to the store yesterday."',
      options: ['go', 'went', 'gone', 'going'],
      correctAnswer: 1,
      explanation: 'The past tense of "go" is "went".'
    },
    {
      id: 2,
      question: 'Which sentence is grammatically correct?',
      options: [
        'She don\'t like coffee.',
        'She doesn\'t like coffee.',
        'She not like coffee.',
        'She isn\'t like coffee.'
      ],
      correctAnswer: 1,
      explanation: 'The correct form uses "doesn\'t" (does not) with third person singular.'
    },
  ],
  reading: [
    {
      id: 1,
      question: 'What is the main idea of the passage?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 2,
      explanation: 'The main idea is typically found in the topic sentence or conclusion.'
    },
  ],
}

export default function Practice() {
  const [selectedCategory, setSelectedCategory] = useState<string>('vocabulary')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [streak, setStreak] = useState(0)

  const questions = practiceQuestions[selectedCategory] || []
  const currentQ = questions[currentQuestion]

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult) return
    setSelectedAnswer(optionIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setShowResult(true)
    setTotalAnswered(totalAnswered + 1)

    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(score + 1)
      setStreak(streak + 1)
    } else {
      setStreak(0)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Reset to first question
      setCurrentQuestion(0)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const categories = [
    { id: 'vocabulary', name: 'Vocabulary', icon: FiBook, color: 'blue' },
    { id: 'grammar', name: 'Grammar', icon: FiTarget, color: 'green' },
    { id: 'reading', name: 'Reading', icon: FiBook, color: 'purple' },
  ]

  const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Mode</h1>
          <p className="text-gray-600">Free practice with instant feedback - No timer!</p>
        </div>

        {/* Category Selection */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setCurrentQuestion(0)
                    setSelectedAnswer(null)
                    setShowResult(false)
                  }}
                  className={`p-4 rounded-lg border-2 transition ${
                    selectedCategory === category.id
                      ? `border-${category.color}-600 bg-${category.color}-50`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-2 text-${category.color}-600`} />
                  <p className="font-semibold text-gray-900">{category.name}</p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Score</p>
                <p className="text-2xl font-bold text-gray-900">{score}</p>
              </div>
              <FiAward className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">{accuracy}%</p>
              </div>
              <FiTarget className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Streak</p>
                <p className="text-2xl font-bold text-gray-900">{streak}</p>
              </div>
              <FiStar className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Answered</p>
                <p className="text-2xl font-bold text-gray-900">{totalAnswered}</p>
              </div>
              <FiBook className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Question Card */}
        {currentQ && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  {selectedCategory.toUpperCase()}
                </span>
                <span className="text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentQ.question}</h2>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, idx) => {
                let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition'
                
                if (showResult) {
                  if (idx === currentQ.correctAnswer) {
                    buttonClass += ' border-green-600 bg-green-50'
                  } else if (idx === selectedAnswer && idx !== currentQ.correctAnswer) {
                    buttonClass += ' border-red-600 bg-red-50'
                  } else {
                    buttonClass += ' border-gray-200'
                  }
                } else {
                  buttonClass += selectedAnswer === idx
                    ? ' border-primary-600 bg-primary-50'
                    : ' border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(idx)}
                    disabled={showResult}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                            showResult
                              ? idx === currentQ.correctAnswer
                                ? 'border-green-600 bg-green-600'
                                : idx === selectedAnswer
                                ? 'border-red-600 bg-red-600'
                                : 'border-gray-300'
                              : selectedAnswer === idx
                              ? 'border-primary-600 bg-primary-600'
                              : 'border-gray-300'
                          }`}
                        >
                          {(showResult && idx === currentQ.correctAnswer) ||
                          (!showResult && selectedAnswer === idx) ? (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          ) : null}
                        </div>
                        <span className="font-medium text-gray-900">{option}</span>
                      </div>
                      {showResult && idx === currentQ.correctAnswer && (
                        <FiCheckCircle className="w-6 h-6 text-green-600" />
                      )}
                      {showResult && idx === selectedAnswer && idx !== currentQ.correctAnswer && (
                        <FiXCircle className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className={`p-4 rounded-lg mb-6 ${
                selectedAnswer === currentQ.correctAnswer
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}>
                <p className="font-semibold mb-2">
                  {selectedAnswer === currentQ.correctAnswer ? 'Correct!' : 'Incorrect'}
                </p>
                <p className="text-gray-700">{currentQ.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end">
              {showResult ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold"
                >
                  Next Question
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


