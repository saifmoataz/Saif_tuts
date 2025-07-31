'use client'

import VideoThumbnail from './VideoThumbnail'

const videos = [
  {
    id: "pwRoiibZMJ0",
    title: "Creative Motion Design",
    category: "Motion Graphics"
  },
  {
    id: "pwRoiibZMJ0",
    title: "Modern Animation",
    category: "Animation"
  },
  {
    id: "pwRoiibZMJ0",
    title: "Visual Storytelling",
    category: "Visual Effects"
  }
]

export default function VideoGrid() {
  return (
    <section id="videos" className="py-20 bg-emerald-900 dark:bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-900 mb-4 animate-fadeInUp">
            Featured Works
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-600 max-w-2xl mx-auto animate-fadeInUp animate-stagger-2">
            Explore our diverse portfolio of creative projects and visual storytelling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group animate-fadeInUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-700 dark:bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <VideoThumbnail
                    videoId={video.id}
                    title={video.title}
                    className="aspect-video rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-emerald-700 bg-emerald-100 dark:text-emerald-600 dark:bg-emerald-50 rounded-full mb-3">
                    {video.category}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-100 dark:text-slate-900 mb-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
