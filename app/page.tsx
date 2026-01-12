'use client'

import Link from 'next/link'
import { Suspense, lazy } from 'react'
import { FiCheckCircle, FiClock, FiBarChart2, FiBook, FiTarget, FiAward, FiArrowRight, FiUsers, FiTrendingUp, FiZap } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Tree3D = lazy(() => import('@/components/Tree3D'))

export default function Home() {
  const features = [
    {
      icon: <FiBook className="w-10 h-10" />,
      title: 'Comprehensive Practice',
      description: 'Access thousands of STEP-style questions covering all exam sections with detailed explanations',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <FiClock className="w-10 h-10" />,
      title: 'Real Exam Simulation',
      description: 'Take full-length mock exams with realistic timing and conditions that mirror the actual test',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <FiBarChart2 className="w-10 h-10" />,
      title: 'Detailed Analytics',
      description: 'Track your progress with detailed performance reports, insights, and personalized recommendations',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: <FiTarget className="w-10 h-10" />,
      title: 'Personalized Learning',
      description: 'Get smart recommendations based on your strengths and weaknesses to focus your study time',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <FiAward className="w-10 h-10" />,
      title: 'Gamification',
      description: 'Earn points, unlock badges, and achieve milestones as you progress through your studies',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: <FiZap className="w-10 h-10" />,
      title: 'Instant Feedback',
      description: 'Receive immediate feedback on your answers with detailed explanations and learning tips',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50'
    }
  ]

  const stats = [
    { number: '100%', label: 'like the exam', icon: <FiUsers className="w-8 h-8" /> },
    { number: '50,000+', label: 'Practice Questions', icon: <FiBook className="w-8 h-8" /> },
    { number: '95%', label: 'Success Rate', icon: <FiTrendingUp className="w-8 h-8" /> },
    { number: '24/7', label: 'Support Available', icon: <FiAward className="w-8 h-8" /> }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      {/* 3D Tree Background */}
      <Suspense fallback={null}>
        <Tree3D />
      </Suspense>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden z-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 animate-pulse-glow-green"
            >
              🎓 Your Path to STEP Success Starts Here
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            >
              Master the STEP Exam
              <span className="block text-4xl md:text-5xl mt-2 text-primary-200">With Confidence</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive preparation platform with practice tests, detailed analytics, and personalized feedback to help you achieve your goals
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/signup"
                className="group bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105 flex items-center gap-3 min-w-[200px] justify-center animate-pulse-glow-green"
              >
                <span>Start Free Trial</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
              href="/level-assessment"
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 min-w-[220px] text-center"
            >
              Quick Level Assessment
            </Link>
              <Link
                href="/login"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 min-w-[200px] text-center"
              >
                Sign In
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-primary-200 text-sm">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5" />
                <span>Free 7-Day Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm -mt-1 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-400 hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="inline-flex p-3 rounded-xl bg-primary-100 text-primary-600 mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white/90 to-gray-50/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools and features designed to maximize your STEP exam preparation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
              >
                <motion.div 
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute top-4 right-4 w-16 h-16 bg-primary-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-pulse-glow-green"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Sign Up Free', desc: 'Create your account in seconds. No credit card required.' },
              { step: '02', title: 'Take Practice Tests', desc: 'Access thousands of questions and full-length mock exams.' },
              { step: '03', title: 'Track Your Progress', desc: 'Get detailed analytics and personalized recommendations.' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:border-primary-400 hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-2xl font-bold mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Level Assessment CTA */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 shadow-xl px-6 py-10 sm:px-10 sm:py-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <p className="inline-flex items-center px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2" />
                Quick Assessment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Take a Quick Level Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-xl">
                Answer 15 carefully selected questions from our bank of 400 questions covering vocabulary, grammar, reading, and listening. Get an accurate estimate of your English level and expected STEP score.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li className="flex items-center justify-center lg:justify-start">
                  <FiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Determine your level through 15 questions in just minutes</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <FiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Covers all skills: vocabulary, grammar, reading, and listening</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <FiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Get your estimated level and STEP score</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/level-assessment"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Assessment
                  <FiArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="w-full max-w-sm lg:max-w-xs">
              <div className="relative rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white p-6 shadow-2xl overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary-300/20 rounded-full" />
                <div className="relative">
                  <p className="text-sm text-primary-100 mb-2">Quick Test</p>
                  <p className="text-xl font-semibold mb-4">Level Assessment</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-primary-100 mb-1">Questions</p>
                      <p className="text-lg font-bold">15</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary-100 mb-1">Duration</p>
                      <p className="text-lg font-bold">~15 min</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden mb-3">
                    <div className="h-full w-full bg-gradient-to-r from-emerald-300 to-lime-300 rounded-full" />
                  </div>
                  <p className="text-xs text-primary-100 mb-5">
                    Perfect for new students to quickly determine their English level and get a personalized study plan.
                  </p>
                  <div className="flex items-center justify-between text-xs text-primary-100">
                    <span>Get instant results with detailed feedback.</span>
                    <span className="font-semibold text-primary-50">Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Exam CTA on Home */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-xl px-6 py-10 sm:px-10 sm:py-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <p className="inline-flex items-center px-4 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2" />
                Realistic STEP Experience
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Take a Full STEP Mock Exam
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-xl">
                Experience a timed, full-length mock exam that mirrors the real STEP test
                so you can measure your readiness and build confidence before exam day.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li className="flex items-center justify-center lg:justify-start">
                  <FiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Timed sections with realistic exam conditions</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <FiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Balanced coverage of listening, reading, grammar, and vocabulary</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <FiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Instant overview of your performance after submission</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/exam-simulator"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Mock Exam
                  <FiArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-primary-200 text-primary-700 font-semibold text-base bg-white hover:bg-primary-50 hover:border-primary-400 transition-all duration-300"
                >
                  Practice by Section
                </Link>
              </div>
            </div>
            <div className="w-full max-w-sm lg:max-w-xs">
              <div className="relative rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white p-6 shadow-2xl overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary-300/20 rounded-full" />
                <div className="relative">
                  <p className="text-sm text-primary-100 mb-2">Next 60 minutes</p>
                  <p className="text-xl font-semibold mb-4">Simulated STEP Exam</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-primary-100 mb-1">Estimated Duration</p>
                      <p className="text-lg font-bold">~120 min</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary-100 mb-1">Question Sets</p>
                      <p className="text-lg font-bold">Multi‑section</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden mb-3">
                    <div className="h-full w-2/3 bg-gradient-to-r from-emerald-300 to-lime-300 rounded-full" />
                  </div>
                  <p className="text-xs text-primary-100 mb-5">
                    Recommended for students who have already completed basic practice and
                    want to simulate the real exam environment.
                  </p>
                  <div className="flex items-center justify-between text-xs text-primary-100">
                    <span>Mock exam result is not sent to any institution.</span>
                    <span className="font-semibold text-primary-50">Safe to experiment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Ace Your STEP Exam?
          </h2>
          <p className="text-xl mb-10 text-primary-100 max-w-2xl mx-auto">
            Join thousands of successful students who've achieved their goals with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-primary-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Start Your Free Trial</span>
              <FiArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
