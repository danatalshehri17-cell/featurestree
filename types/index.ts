/**
 * Type definitions for STEP Exam Platform
 */

export interface User {
  id: number
  name: string
  email: string
  phone?: string
  subscription: 'free' | 'basic' | 'premium'
  joinDate: string
  studyStreak: number
}

export interface Question {
  id: number
  section: 'listening' | 'reading' | 'grammar' | 'vocabulary'
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
}

export interface ExamResult {
  id: number
  examId: number
  examName: string
  userId: number
  score: number
  totalQuestions: number
  correctAnswers: number
  timeSpent: number
  date: string
  skillBreakdown: {
    reading: number
    grammar: number
    vocabulary: number
    listening: number
  }
}

export interface PracticeSession {
  id: number
  category: string
  questions: Question[]
  score: number
  timeSpent: number
  date: string
}

export interface Badge {
  id: number
  name: string
  description: string
  icon: string
  earned: boolean
  earnedDate?: string
}

