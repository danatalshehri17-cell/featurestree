'use client'

import { FiClock, FiTarget, FiTrendingUp, FiBarChart2 } from 'react-icons/fi'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const performanceData = [
  { date: 'Week 1', score: 65, time: 120 },
  { date: 'Week 2', score: 72, time: 135 },
  { date: 'Week 3', score: 68, time: 110 },
  { date: 'Week 4', score: 78, time: 145 },
  { date: 'Week 5', score: 82, time: 150 },
]

const skillData = [
  { skill: 'Reading', score: 85 },
  { skill: 'Grammar', score: 72 },
  { skill: 'Vocabulary', score: 68 },
  { skill: 'Listening', score: 75 },
  { skill: 'Writing', score: 70 },
]

const timeSpentData = [
  { category: 'Reading', minutes: 420 },
  { category: 'Grammar', minutes: 380 },
  { category: 'Vocabulary', minutes: 350 },
  { category: 'Listening', minutes: 290 },
]

const questionTimeData = [
  { question: 'Q1', time: 45 },
  { question: 'Q2', time: 30 },
  { question: 'Q3', time: 60 },
  { question: 'Q4', time: 35 },
  { question: 'Q5', time: 50 },
]

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">Detailed insights into your performance and study patterns</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Study Time</p>
                <p className="text-3xl font-bold text-gray-900">42h 15m</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FiClock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2 flex items-center">
              <FiTrendingUp className="mr-1" /> +12% this week
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Average Score</p>
                <p className="text-3xl font-bold text-gray-900">78%</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <FiTarget className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2 flex items-center">
              <FiTrendingUp className="mr-1" /> +5% improvement
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Tests Completed</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <FiBarChart2 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">This month</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Weakest Skill</p>
                <p className="text-3xl font-bold text-gray-900">Vocab</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <FiTarget className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">68% accuracy</p>
          </div>
        </div>

        {/* Performance Trend */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Trend</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} name="Score (%)" />
              <Line yAxisId="right" type="monotone" dataKey="time" stroke="#10b981" strokeWidth={2} name="Time (min)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Skills Radar */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Score" dataKey="score" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Time Spent by Category */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Time Spent by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={timeSpentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="minutes" fill="#2563eb" name="Minutes" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weak Skills Report */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Weak Skills Report</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Vocabulary</h3>
                <span className="text-red-600 font-bold">68%</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                You're struggling with academic vocabulary and word meanings. Focus on:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Academic word lists</li>
                <li>Context clues practice</li>
                <li>Root word analysis</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Grammar</h3>
                <span className="text-yellow-600 font-bold">72%</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Subject-verb agreement needs improvement. Practice:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Subject-verb agreement exercises</li>
                <li>Tense consistency</li>
                <li>Sentence structure</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personalized Recommendations */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Personalized Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">📚 Vocabulary Builder</h3>
              <p className="text-sm text-gray-600 mb-3">
                Complete 20 vocabulary exercises focusing on academic words
              </p>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Start Practice →
              </button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">✍️ Grammar Mastery</h3>
              <p className="text-sm text-gray-600 mb-3">
                Review subject-verb agreement rules and complete practice sets
              </p>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Start Practice →
              </button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">📖 Reading Strategies</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn techniques for identifying main ideas and supporting details
              </p>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Start Practice →
              </button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">🎧 Listening Practice</h3>
              <p className="text-sm text-gray-600 mb-3">
                Improve your listening comprehension with audio exercises
              </p>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Start Practice →
              </button>
            </div>
          </div>
        </div>

        {/* Question Time Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Time Spent per Question</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={questionTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="question" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="time" fill="#f59e0b" name="Time (seconds)" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-4">
            Average time per question: 44 seconds (Target: 60 seconds)
          </p>
        </div>
      </div>
    </div>
  )
}


