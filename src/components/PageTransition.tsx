'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    setShowContent(false)

    const timer = setTimeout(() => {
      setShowContent(true)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="relative">
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-emerald-50 via-teal-100 to-green-100 dark:from-slate-900 dark:via-emerald-900 dark:to-slate-900 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-emerald-200 dark:border-emerald-800 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-medium">Loading...</p>
          </div>
        </div>
      )}

      {/* Page content */}
      <div
        className={`transition-all duration-500 ${
          showContent
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-4'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
