'use client'

import { useState, useEffect } from 'react'
import { FiPause, FiPlay, FiFlag, FiChevronLeft, FiChevronRight, FiAlertCircle } from 'react-icons/fi'

type Question = {
  id: number
  section: 'listening' | 'reading' | 'grammar' | 'vocabulary'
  question: string
  options: string[]
  correctAnswer: number
}

const mockQuestions: Question[] = [
  {
    id: 1,
    section: 'listening',
    question: 'Listen to the audio and select the correct answer:',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 1
  },
  {
    id: 2,
    section: 'reading',
    question: 'What is the main idea of the passage?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 2
  },
  {
    id: 3,
    section: 'grammar',
    question: 'Choose the correct form: "I _____ to the store yesterday."',
    options: ['go', 'went', 'gone', 'going'],
    correctAnswer: 1
  },
  {
    id: 4,
    section: 'vocabulary',
    question: 'What does "ubiquitous" mean?',
    options: ['Rare', 'Everywhere', 'Expensive', 'Beautiful'],
    correctAnswer: 1
  },
]

const sections = [
  { id: 'listening', name: 'Listening', time: 30, questions: 10 },
  { id: 'reading', name: 'Reading', time: 45, questions: 15 },
  { id: 'grammar', name: 'Grammar', time: 20, questions: 10 },
  { id: 'vocabulary', name: 'Vocabulary', time: 15, questions: 10 },
]

export default function ExamSimulator() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [isPaused, setIsPaused] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(120 * 60) // 120 minutes in seconds
  const [currentSection, setCurrentSection] = useState(0)
  const [showReportModal, setShowReportModal] = useState(false)

  useEffect(() => {
    if (!isPaused && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => Math.max(0, prev - 1))
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isPaused, timeRemaining])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex)
    setAnswers({ ...answers, [mockQuestions[currentQuestion].id]: optionIndex })
  }

  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(answers[mockQuestions[currentQuestion + 1].id] || null)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[mockQuestions[currentQuestion - 1].id] || null)
    }
  }

  const handleSubmit = () => {
    if (confirm('Are you sure you want to submit the exam? You cannot change your answers after submission.')) {
      // Navigate to results page
      window.location.href = '/results'
    }
  }

  const currentQ = mockQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Timer */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">STEP Mock Exam</h1>
              <p className="text-sm text-gray-600">
                Section: {sections[currentSection].name} ({currentQuestion + 1} of {mockQuestions.length})
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                <span className="font-mono text-lg font-semibold">{formatTime(timeRemaining)}</span>
              </div>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
              >
                {isPaused ? <FiPlay /> : <FiPause />}
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Question Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Question Navigation</h3>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {mockQuestions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestion(idx)
                      setSelectedAnswer(answers[q.id] || null)
                    }}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                      currentQuestion === idx
                        ? 'bg-primary-600 text-white'
                        : answers[q.id]
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-100 rounded mr-2"></div>
                  <span className="text-gray-600">Answered</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-100 rounded mr-2"></div>
                  <span className="text-gray-600">Not Answered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Section Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  {currentQ.section.toUpperCase()}
                </span>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Question {currentQuestion + 1}
                </h2>
                <p className="text-lg text-gray-700 mb-6">{currentQ.question}</p>

                {/* Audio Player for Listening */}
                {currentQ.section === 'listening' && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <audio controls className="w-full">
                      <source src="/audio/sample.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}

                {/* Options */}
                <div className="space-y-3">
                  {currentQ.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(idx)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition ${
                        selectedAnswer === idx
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                            selectedAnswer === idx
                              ? 'border-primary-600 bg-primary-600'
                              : 'border-gray-300'
                          }`}
                        >
                          {selectedAnswer === idx && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="font-medium text-gray-900">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiChevronLeft />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setShowReportModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <FiFlag />
                  <span>Report Question</span>
                </button>

                {currentQuestion === mockQuestions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                  >
                    Submit Exam
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                  >
                    <span>Next</span>
                    <FiChevronRight />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Question Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <FiAlertCircle className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Report Question</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Please describe the issue with this question:
            </p>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              rows={4}
              placeholder="Describe the issue..."
            />
            <div className="flex space-x-4">
              <button
                onClick={() => setShowReportModal(false)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowReportModal(false)
                  alert('Thank you for reporting. We will review this question.')
                }}
                className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


