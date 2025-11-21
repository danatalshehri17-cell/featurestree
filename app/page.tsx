'use client'

import Link from 'next/link'
import { FiCheckCircle, FiClock, FiBarChart2, FiBook, FiTarget, FiAward, FiArrowRight } from 'react-icons/fi'

export default function Home() {

  const features = [
    {
      icon: <FiBook className="w-8 h-8" />,
      title: 'Comprehensive Practice',
      description: 'Access thousands of STEP-style questions covering all exam sections',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Real Exam Simulation',
      description: 'Take full-length mock exams with realistic timing and conditions',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: 'Detailed Analytics',
      description: 'Track your progress with detailed performance reports and insights',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Personalized Learning',
      description: 'Get recommendations based on your strengths and weaknesses',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: 'Gamification',
      description: 'Earn points, badges, and achievements as you progress',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: 'Instant Feedback',
      description: 'Receive immediate feedback on your answers with explanations',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Master the STEP Exam
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Your comprehensive preparation platform with practice tests, quizzes, and personalized feedback to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/login"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to prepare effectively for your STEP exam
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition hover-lift"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of students preparing for their STEP exam
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg hover:scale-105"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  )
}

