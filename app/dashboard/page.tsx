'use client'

import Link from 'next/link'
import { FiBarChart2, FiClock, FiBook, FiTarget, FiTrendingUp, FiPlay } from 'react-icons/fi'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

const performanceData = [
  { name: 'Week 1', score: 65 },
  { name: 'Week 2', score: 72 },
  { name: 'Week 3', score: 68 },
  { name: 'Week 4', score: 78 },
  { name: 'Week 5', score: 82 },
]

const skillData = [
  { skill: 'Reading', score: 85, color: '#2563eb' },
  { skill: 'Grammar', score: 72, color: '#10b981' },
  { skill: 'Vocabulary', score: 68, color: '#f59e0b' },
  { skill: 'Listening', score: 75, color: '#ef4444' },
]

const recentTests = [
  { id: 1, name: 'Full Mock Exam #5', date: '2024-01-15', score: 82, status: 'completed' },
  { id: 2, name: 'Grammar Practice Set', date: '2024-01-14', score: 75, status: 'completed' },
  { id: 3, name: 'Vocabulary Quiz', date: '2024-01-13', score: 68, status: 'completed' },
  { id: 4, name: 'Reading Comprehension', date: '2024-01-12', score: 85, status: 'completed' },
]

const recommendedLessons = [
  { id: 1, title: 'Advanced Grammar Rules', type: 'Grammar', difficulty: 'Intermediate' },
  { id: 2, title: 'Vocabulary Builder: Academic Words', type: 'Vocabulary', difficulty: 'Advanced' },
  { id: 3, title: 'Reading Strategies', type: 'Reading', difficulty: 'Beginner' },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600">Here's your performance overview</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Average Score', value: '77%', icon: FiBarChart2, color: 'primary' },
            { label: 'Tests Completed', value: '24', icon: FiBook, color: 'green' },
            { label: 'Study Streak', value: '12 days', icon: FiTarget, color: 'yellow' },
            { label: 'Time Spent', value: '45h', icon: FiClock, color: 'purple' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color === 'primary' ? 'bg-primary-100' : stat.color === 'green' ? 'bg-green-100' : stat.color === 'yellow' ? 'bg-yellow-100' : 'bg-purple-100'} w-12 h-12 rounded-full flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color === 'primary' ? 'text-primary-600' : stat.color === 'green' ? 'text-green-600' : stat.color === 'yellow' ? 'text-yellow-600' : 'text-purple-600'}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Performance Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Breakdown */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Tests */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Recent Tests</h2>
            <Link href="/exam-simulator" className="text-primary-600 hover:text-primary-700 font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentTests.map((test) => (
              <div key={test.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{test.name}</h3>
                  <p className="text-sm text-gray-600">{test.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{test.score}%</p>
                  <p className="text-sm text-gray-600 capitalize">{test.status}</p>
                </div>
                <Link
                  href={`/results/${test.id}`}
                  className="ml-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  View Results
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Lessons */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedLessons.map((lesson) => (
              <div key={lesson.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded">
                    {lesson.type}
                  </span>
                  <span className="text-xs text-gray-600">{lesson.difficulty}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{lesson.title}</h3>
                <Link
                  href="/practice"
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Start Practice <FiPlay className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/exam-simulator"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Start Mock Exam
          </Link>
          <Link
            href="/practice"
            className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            Practice Mode
          </Link>
          <Link
            href="/analytics"
            className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            View Analytics
          </Link>
        </div>
      </div>
    </div>
  )
}


