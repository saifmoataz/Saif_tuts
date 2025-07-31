'use client'

import VideoThumbnail from './VideoThumbnail'

export default function ShowreelSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-emerald-50 via-teal-100 to-green-100 dark:from-slate-900 dark:via-emerald-900 dark:to-slate-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-slate-800 dark:text-white mb-6 tracking-tight">
            SHOWREEL
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
            Here is what I can do...
          </p>
        </div>

        {/* Main video with custom thumbnail and button */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <VideoThumbnail
                videoId="3sfungB8KzE"
                title="Main Showreel"
                className="aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
