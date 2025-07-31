'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface VideoThumbnailProps {
  videoId: string
  title: string
  className?: string
  showTitle?: boolean
}

export default function VideoThumbnail({ videoId, title, className = "", showTitle = false }: VideoThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePlay = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsPlaying(true)
      setIsLoading(false)
    }, 300)
  }

  if (isPlaying) {
    return (
      <div className={`relative ${className}`}>
        <iframe
          className="w-full h-full rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={`relative group cursor-pointer ${className}`}>
      {/* Thumbnail Image */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to high quality thumbnail if maxres doesn't exist
            const target = e.target as HTMLImageElement
            target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Play Button */}
        <div
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className={`
            relative w-16 h-16 md:w-20 md:h-20 bg-white/90 hover:bg-white rounded-full
            flex items-center justify-center shadow-2xl backdrop-blur-sm
            transform transition-all duration-300 group-hover:scale-110
            ${isLoading ? 'animate-pulse' : 'hover:shadow-xl'}
          `}>
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-slate-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <Play className="w-6 h-6 md:w-8 md:h-8 text-slate-800 ml-1" fill="currentColor" />
            )}
          </div>
        </div>

        {/* Video Duration Overlay (if needed) */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to play
        </div>
      </div>

      {/* Title */}
      {showTitle && (
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
        </div>
      )}
    </div>
  )
}
