'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  variant?: 'default' | 'white'
  className?: string
}

export default function Logo({ size = 'md', showText = true, variant = 'default', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: { logo: 'w-8 h-8', text: 'text-sm' },
    md: { logo: 'w-12 h-12', text: 'text-base' },
    lg: { logo: 'w-16 h-16', text: 'text-lg' }
  }

  const textColor = variant === 'white' ? 'text-white' : 'text-gray-900'

  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
      <div className={`${sizeClasses[size].logo} relative flex-shrink-0`}>
        <Image
          src="/logo.JPG"
          alt="Features Tree Logo"
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${sizeClasses[size].text} ${textColor} group-hover:text-primary-600 transition-colors leading-tight`}>
            FEATURES
          </span>
          <span className={`font-bold ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'} ${textColor} group-hover:text-primary-600 transition-colors leading-tight -mt-0.5`}>
            TREE
          </span>
        </div>
      )}
    </Link>
  )
}


