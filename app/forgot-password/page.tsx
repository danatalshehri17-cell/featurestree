'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMail, FiPhone, FiArrowLeft } from 'react-icons/fi'

export default function ForgotPassword() {
  const [resetMethod, setResetMethod] = useState<'email' | 'phone'>('email')
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    setSubmitted(true)
    console.log('Password reset requested:', formData)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <FiMail className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your inbox</h2>
            <p className="text-gray-600 mb-6">
              We've sent password reset instructions to {resetMethod === 'email' ? formData.email : formData.phone}
            </p>
            <Link
              href="/login"
              className="text-primary-600 hover:text-primary-500 font-medium"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your {resetMethod === 'email' ? 'email' : 'phone number'} and we'll send you instructions to reset your password
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Reset Method Toggle */}
            <div className="flex mb-4 bg-white rounded-lg p-1">
              <button
                type="button"
                onClick={() => setResetMethod('email')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
                  resetMethod === 'email'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FiMail className="inline mr-2" />
                Email
              </button>
              <button
                type="button"
                onClick={() => setResetMethod('phone')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
                  resetMethod === 'phone'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FiPhone className="inline mr-2" />
                Phone
              </button>
            </div>

            {/* Email or Phone Input */}
            <div>
              <label htmlFor={resetMethod} className="sr-only">
                {resetMethod === 'email' ? 'Email address' : 'Phone number'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {resetMethod === 'email' ? (
                    <FiMail className="h-5 w-5 text-gray-400" />
                  ) : (
                    <FiPhone className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <input
                  id={resetMethod}
                  name={resetMethod}
                  type={resetMethod === 'email' ? 'email' : 'tel'}
                  required
                  className="appearance-none rounded-lg relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder={resetMethod === 'email' ? 'Email address' : 'Phone number'}
                  value={resetMethod === 'email' ? formData.email : formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, [resetMethod]: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Send reset instructions
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/login"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              <FiArrowLeft className="mr-2" />
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}


