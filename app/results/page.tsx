'use client'

import Link from 'next/link'
import { FiCheckCircle, FiXCircle, FiTrendingUp, FiTarget, FiAward, FiArrowLeft } from 'react-icons/fi'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const skillBreakdown = [
  { name: 'Reading', score: 85, total: 100, color: '#2563eb' },
  { name: 'Grammar', score: 72, total: 100, color: '#10b981' },
  { name: 'Vocabulary', score: 68, total: 100, color: '#f59e0b' },
  { name: 'Listening', score: 75, total: 100, color: '#ef4444' },
]

const commonMistakes = [
  { category: 'Grammar', mistake: 'Subject-verb agreement', count: 5 },
  { category: 'Vocabulary', mistake: 'Word meaning confusion', count: 3 },
  { category: 'Reading', mistake: 'Main idea identification', count: 2 },
]

const previousAttempts = [
  { date: '2024-01-10', score: 70 },
  { date: '2024-01-05', score: 65 },
  { date: '2023-12-28', score: 68 },
]

const pieData = [
  { name: 'Correct', value: 38, color: '#10b981' },
  { name: 'Incorrect', value: 12, color: '#ef4444' },
]

export default function Results() {
  const finalScore = 76
  const totalQuestions = 50
  const correctAnswers = 38
  const incorrectAnswers = 12

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <FiArrowLeft className="mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Exam Results</h1>
          <p className="text-gray-600">Mock Exam #5 - Completed on January 15, 2024</p>
        </div>

        {/* Final Score Card */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="inline-block bg-white bg-opacity-20 rounded-full p-4 mb-4">
              <FiAward className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-2">Final Score: {finalScore}%</h2>
            <p className="text-primary-100 text-lg">
              {correctAnswers} out of {totalQuestions} questions correct
            </p>
            <div className="mt-6 flex items-center justify-center space-x-8">
              <div className="text-center">
                <p className="text-2xl font-bold">{correctAnswers}</p>
                <p className="text-primary-100">Correct</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{incorrectAnswers}</p>
                <p className="text-primary-100">Incorrect</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Score Distribution */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Score Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Breakdown */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills Breakdown</h3>
            <div className="space-y-4">
              {skillBreakdown.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-gray-600">{skill.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-all"
                      style={{
                        width: `${skill.score}%`,
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Mistakes</h3>
          <div className="space-y-4">
            {commonMistakes.map((mistake, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <p className="font-semibold text-gray-900">{mistake.mistake}</p>
                  <p className="text-sm text-gray-600">{mistake.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-600">{mistake.count}</p>
                  <p className="text-sm text-gray-600">occurrences</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Improvement Suggestions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Improvement Suggestions</h3>
          <div className="space-y-3">
            <div className="flex items-start p-4 bg-blue-50 rounded-lg">
              <FiTarget className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Focus on Grammar</p>
                <p className="text-gray-700 text-sm">
                  Practice subject-verb agreement exercises. Consider reviewing basic grammar rules.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-green-50 rounded-lg">
              <FiTrendingUp className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Expand Vocabulary</p>
                <p className="text-gray-700 text-sm">
                  Work on academic vocabulary. Try our vocabulary builder practice sets.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-purple-50 rounded-lg">
              <FiAward className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reading Comprehension</p>
                <p className="text-gray-700 text-sm">
                  Practice identifying main ideas and supporting details in passages.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison with Previous Attempts */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Progress Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[...previousAttempts, { date: '2024-01-15', score: finalScore }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#2563eb" name="Score (%)" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Great progress!</span> Your score improved by{' '}
              {finalScore - previousAttempts[0].score}% compared to your last attempt.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/practice"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Practice Weak Areas
          </Link>
          <Link
            href="/exam-simulator"
            className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition font-semibold"
          >
            Take Another Exam
          </Link>
          <Link
            href="/analytics"
            className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            View Detailed Analytics
          </Link>
        </div>
      </div>
    </div>
  )
}


