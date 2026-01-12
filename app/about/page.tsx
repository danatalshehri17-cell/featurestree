'use client'

import { FiTarget, FiUsers, FiAward, FiHeart } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            About STEP Exam Platform
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Empowering students to achieve their best on the STEP exam through comprehensive preparation and personalized learning
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To provide accessible, high-quality exam preparation resources that help students succeed on the STEP exam and achieve their academic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FiTarget, title: 'Excellence', color: 'primary', text: 'We strive for excellence in everything we do, from content quality to user experience.' },
              { icon: FiUsers, title: 'Student-Focused', color: 'green', text: 'Our students are at the heart of everything we do. We listen, adapt, and improve based on their needs.' },
              { icon: FiAward, title: 'Innovation', color: 'yellow', text: 'We continuously innovate to provide the best learning tools and technologies for exam preparation.' },
              { icon: FiHeart, title: 'Accessibility', color: 'red', text: 'We believe quality education should be accessible to everyone, regardless of their background.' }
            ].map((value, index) => {
              const colorClasses = {
                primary: 'bg-primary-100 text-primary-600',
                green: 'bg-green-100 text-green-600',
                yellow: 'bg-yellow-100 text-yellow-600',
                red: 'bg-red-100 text-red-600'
              }
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center"
              >
                <div className={`${colorClasses[value.color as keyof typeof colorClasses].split(' ')[0]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`w-8 h-8 ${colorClasses[value.color as keyof typeof colorClasses].split(' ')[1]}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.text}</p>
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from students who achieved success with our platform
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                initials: 'MA', 
                name: 'Mohammed Al-Saud', 
                role: 'STEP Exam Success', 
                color: 'primary', 
                quote: 'This platform transformed my preparation journey. The comprehensive question bank and detailed analytics helped me identify my weaknesses and improve significantly. I scored 95 on my STEP exam!',
                rating: 5
              },
              { 
                initials: 'SA', 
                name: 'Sarah Al-Rashid', 
                role: 'Language Assessment Expert', 
                color: 'green', 
                quote: 'As an educator, I recommend this platform to all my students. The level assessment test is incredibly accurate, and the personalized learning paths make a real difference in their progress.',
                rating: 5
              },
              { 
                initials: 'KA', 
                name: 'Khalid Al-Mansouri', 
                role: 'Engineering Student', 
                color: 'purple', 
                quote: 'The mock exams are the best I\'ve tried. They perfectly simulate the real STEP exam environment, which helped me overcome test anxiety and perform confidently on exam day.',
                rating: 5
              }
            ].map((testimonial, index) => {
              const colorClasses = {
                primary: 'bg-primary-600',
                green: 'bg-green-600',
                purple: 'bg-purple-600'
              }
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-16 h-16 ${colorClasses[testimonial.color as keyof typeof colorClasses]} rounded-full mx-auto flex items-center justify-center mb-4`}>
                    <span className="text-white text-xl font-bold">{testimonial.initials}</span>
                  </div>
                </div>
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-center leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-center border-t pt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-primary-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We envision a world where every student has access to high-quality exam preparation resources that help them unlock their full potential. Through technology, innovation, and a commitment to excellence, we're building the future of standardized test preparation—one that's personalized, accessible, and effective for learners everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-primary-100">like the exam</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50K+</p>
              <p className="text-primary-100">Practice Questions</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">95%</p>
              <p className="text-primary-100">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-primary-100">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


