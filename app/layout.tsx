import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Features Tree - STEP Exam Preparation Platform',
  description: 'Comprehensive STEP exam preparation platform with practice tests, quizzes, and personalized feedback',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

