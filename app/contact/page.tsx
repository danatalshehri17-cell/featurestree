'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiHelpCircle, FiMessageCircle, FiBook } from 'react-icons/fi'

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'Click on "Forgot Password" on the login page, enter your email or phone number, and follow the instructions sent to you.'
  },
  {
    question: 'Can I use the platform on mobile devices?',
    answer: 'Yes! Our platform is fully responsive and works on all devices including smartphones and tablets.'
  },
  {
    question: 'How accurate are the mock exams?',
    answer: 'Our mock exams are designed to closely mirror the actual STEP exam format, difficulty, and question types based on official exam patterns.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
  },
  {
    question: 'How do I report a technical issue?',
    answer: 'You can report issues through the contact form below, email us at support@stepexam.com, or use the "Report Question" feature in the exam simulator.'
  },
]

const troubleshooting = [
  {
    issue: 'Audio not playing in listening section',
    solution: 'Check your browser settings to ensure audio is enabled. Try refreshing the page or using a different browser.'
  },
  {
    issue: 'Timer not working correctly',
    solution: 'Clear your browser cache and cookies, then refresh the page. If the issue persists, contact support.'
  },
  {
    issue: 'Can\'t submit exam answers',
    solution: 'Ensure you have a stable internet connection. Try saving your answers and refreshing the page.'
  },
  {
    issue: 'Progress not saving',
    solution: 'Make sure you\'re logged in and have an active internet connection. Your progress should auto-save every 30 seconds.'
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    console.log('Contact form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We're here to help! Get in touch with our support team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FiMail className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-2">Send us an email anytime</p>
            <a href="mailto:support@stepexam.com" className="text-primary-600 hover:text-primary-700 font-medium">
              support@stepexam.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FiPhone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-2">Call us during business hours</p>
            <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700 font-medium">
              +1 (234) 567-890
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FiMapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
            <p className="text-gray-600">
              123 Education Street<br />
              Learning City, LC 12345<br />
              United States
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
          {submitted ? (
            <div className="text-center py-12">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSend className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-4">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ name: '', email: '', subject: '', message: '' })
                }}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold flex items-center justify-center space-x-2"
              >
                <FiSend />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <FiHelpCircle className="w-6 h-6 text-primary-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting Guide */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <FiBook className="w-6 h-6 text-primary-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Troubleshooting Guide for STEP Exam</h2>
          </div>
          <div className="space-y-6">
            {troubleshooting.map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <FiMessageCircle className="w-5 h-5 text-primary-600 mr-2" />
                  {item.issue}
                </h3>
                <p className="text-gray-700 ml-7">{item.solution}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Still having issues?</strong> Our support team is available 24/7. Contact us using the form above or email us at{' '}
              <a href="mailto:support@stepexam.com" className="text-primary-600 hover:text-primary-700 font-medium">
                support@stepexam.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


