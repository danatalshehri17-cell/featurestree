'use client'

import { useState } from 'react'
import { FiUser, FiMail, FiPhone, FiEdit2, FiSave, FiX, FiAward, FiTarget, FiCalendar } from 'react-icons/fi'

const badges = [
  { id: 1, name: 'First Steps', description: 'Completed first exam', icon: '🎯', earned: true },
  { id: 2, name: 'Week Warrior', description: '7-day study streak', icon: '🔥', earned: true },
  { id: 3, name: 'Grammar Master', description: '90%+ in Grammar', icon: '📚', earned: true },
  { id: 4, name: 'Perfect Score', description: '100% on any exam', icon: '⭐', earned: false },
  { id: 5, name: 'Marathon Runner', description: '30-day study streak', icon: '🏃', earned: false },
  { id: 6, name: 'Vocabulary Expert', description: 'Master 500 words', icon: '📖', earned: false },
]

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    joinDate: '2023-12-01',
  })

  const [editData, setEditData] = useState(userData)

  const handleSave = () => {
    setUserData(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(userData)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information and view your achievements</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl font-bold">
                  {userData.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
                <p className="text-gray-600">Member since {new Date(userData.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
              >
                <FiEdit2 />
                <span>Edit Profile</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <FiSave />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                  <FiX />
                  <span>Cancel</span>
                </button>
              </div>
            )}
          </div>

          {/* User Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              ) : (
                <div className="flex items-center space-x-2 text-gray-900">
                  <FiUser className="w-5 h-5 text-gray-400" />
                  <span>{userData.name}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              ) : (
                <div className="flex items-center space-x-2 text-gray-900">
                  <FiMail className="w-5 h-5 text-gray-400" />
                  <span>{userData.email}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editData.phone}
                  onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              ) : (
                <div className="flex items-center space-x-2 text-gray-900">
                  <FiPhone className="w-5 h-5 text-gray-400" />
                  <span>{userData.phone}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Study Streak</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600 mt-1">days in a row</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <FiTarget className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Exams</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
                <p className="text-sm text-gray-600 mt-1">completed</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FiAward className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Average Score</p>
                <p className="text-3xl font-bold text-gray-900">78%</p>
                <p className="text-sm text-gray-600 mt-1">all time</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <FiTarget className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Badges */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Achievements & Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 rounded-lg border-2 ${
                  badge.earned
                    ? 'border-yellow-400 bg-yellow-50'
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{badge.name}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
                {badge.earned && (
                  <span className="inline-block mt-2 text-xs font-semibold text-yellow-700 bg-yellow-200 px-2 py-1 rounded">
                    Earned
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


