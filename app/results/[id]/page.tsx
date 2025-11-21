'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function ResultDetail() {
  const params = useParams()
  const resultId = params.id

  // In a real app, fetch result data based on ID
  const result = {
    id: resultId,
    examName: 'Full Mock Exam #5',
    date: '2024-01-15',
    score: 76,
    totalQuestions: 50,
    correctAnswers: 38,
    timeSpent: 7200, // seconds
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/results"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to Results
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{result.examName}</h1>
          <p className="text-gray-600 mb-6">Completed on {new Date(result.date).toLocaleDateString()}</p>
          
          <div className="bg-primary-50 rounded-lg p-6 mb-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Final Score</p>
              <p className="text-5xl font-bold text-primary-600">{result.score}%</p>
              <p className="text-gray-600 mt-2">
                {result.correctAnswers} out of {result.totalQuestions} questions correct
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Time Spent</span>
              <span className="text-gray-600">
                {Math.floor(result.timeSpent / 60)} minutes {result.timeSpent % 60} seconds
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Correct Answers</span>
              <span className="text-green-600 font-semibold">{result.correctAnswers}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Incorrect Answers</span>
              <span className="text-red-600 font-semibold">
                {result.totalQuestions - result.correctAnswers}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/results"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold"
            >
              View All Results
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

