'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiUser, FiLogIn } from 'react-icons/fi'
import Logo from './Logo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn] = useState(false) // This would come from auth context

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Logo size="md" showText={true} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium">
              Home
            </Link>
            <Link href="/pricing" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium">
              About
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium">
              Contact
            </Link>
            {isLoggedIn ? (
              <Link href="/dashboard" className="ml-4 flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-all duration-200 px-5 py-2 rounded-lg hover:bg-primary-50 font-medium">
                <FiUser />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link href="/login" className="ml-4 flex items-center space-x-2 bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg font-semibold">
                <FiLogIn />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              {isMenuOpen ? <FiX size={24} className="animate-spin-in" /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-in">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              href="/pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-all duration-300"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-all duration-300"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-all duration-300"
            >
              Contact
            </Link>
            {isLoggedIn ? (
              <Link 
                href="/dashboard" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-all duration-300"
              >
                Dashboard
              </Link>
            ) : (
              <Link 
                href="/login" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded text-center hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

