'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiUser, FiLogIn } from 'react-icons/fi'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn] = useState(false) // This would come from auth context

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">STEP Platform</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 transition-all duration-300 relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-all duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-all duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {isLoggedIn ? (
              <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary-50">
                <FiUser />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link href="/login" className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
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

