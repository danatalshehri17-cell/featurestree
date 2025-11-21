'use client'

import { useState } from 'react'
import { FiUsers, FiFileText, FiCreditCard, FiUpload, FiEdit, FiTrash2, FiPlus, FiSearch } from 'react-icons/fi'

type User = {
  id: number
  name: string
  email: string
  subscription: string
  joinDate: string
  status: 'active' | 'inactive'
}

type Question = {
  id: number
  question: string
  category: string
  difficulty: string
  created: string
}

const mockUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', subscription: 'Premium', joinDate: '2023-12-01', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', subscription: 'Basic', joinDate: '2024-01-05', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', subscription: 'Free', joinDate: '2024-01-10', status: 'inactive' },
]

const mockQuestions: Question[] = [
  { id: 1, question: 'What does "ubiquitous" mean?', category: 'Vocabulary', difficulty: 'Intermediate', created: '2024-01-15' },
  { id: 2, question: 'Choose the correct form: "I _____ to the store."', category: 'Grammar', difficulty: 'Beginner', created: '2024-01-14' },
  { id: 3, question: 'What is the main idea of the passage?', category: 'Reading', difficulty: 'Advanced', created: '2024-01-13' },
]

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'users' | 'questions' | 'subscriptions' | 'uploads'>('users')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Manage users, questions, subscriptions, and system settings</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {[
                { id: 'users', label: 'Users', icon: FiUsers },
                { id: 'questions', label: 'Questions', icon: FiFileText },
                { id: 'subscriptions', label: 'Subscriptions', icon: FiCreditCard },
                { id: 'uploads', label: 'Uploads', icon: FiUpload },
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Users Tab */}
            {activeTab === 'users' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Subscription
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Join Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              user.subscription === 'Premium' ? 'bg-purple-100 text-purple-800' :
                              user.subscription === 'Basic' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {user.subscription}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(user.joinDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-primary-600 hover:text-primary-900 mr-4">
                              <FiEdit />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <FiTrash2 />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Questions Tab */}
            {activeTab === 'questions' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Question Management</h2>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                    <FiPlus />
                    <span>Add Question</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {mockQuestions.map((question) => (
                    <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 mb-2">{question.question}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                              {question.category}
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">
                              {question.difficulty}
                            </span>
                            <span>Created: {new Date(question.created).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-primary-600 hover:bg-primary-50 rounded">
                            <FiEdit />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Subscriptions Tab */}
            {activeTab === 'subscriptions' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Subscription Control</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Free Plan</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-4">$0</p>
                    <p className="text-sm text-gray-600 mb-4">Basic features</p>
                    <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                      Manage
                    </button>
                  </div>
                  <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                    <h3 className="font-semibold text-gray-900 mb-2">Basic Plan</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-4">$9.99</p>
                    <p className="text-sm text-gray-600 mb-4">Standard features</p>
                    <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                      Manage
                    </button>
                  </div>
                  <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                    <h3 className="font-semibold text-gray-900 mb-2">Premium Plan</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-4">$19.99</p>
                    <p className="text-sm text-gray-600 mb-4">All features</p>
                    <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Uploads Tab */}
            {activeTab === 'uploads' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload New Test Sets</h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <FiUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Upload CSV or JSON files with test questions</p>
                  <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                    Choose File
                  </button>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Recent Uploads</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-900">test_set_2024_01.csv</span>
                      <span className="text-xs text-gray-600">Uploaded on Jan 15, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


