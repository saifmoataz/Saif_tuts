'use client'

export default function DetailsSection() {
  return (
    <section id="about" className="py-20 bg-slate-800 dark:bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-900 mb-6 animate-fadeInUp">
              Our Creative Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full animate-scaleIn animate-stagger-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-fadeInLeft">
              <h3 className="text-2xl font-semibold text-white dark:text-slate-900 mb-4">
                Crafting Visual Stories
              </h3>
              <p className="text-lg text-slate-300 dark:text-slate-600 leading-relaxed">
                We believe in the power of visual storytelling to connect, inspire, and transform.
                Each project in our showcase represents a unique journey of creativity, technical
                expertise, and artistic vision coming together to create something extraordinary.
              </p>
              <p className="text-lg text-slate-300 dark:text-slate-600 leading-relaxed">
                From concept to completion, we pour our passion into every frame, ensuring that
                each video not only meets but exceeds expectations. Our work spans across various
                industries and styles, showcasing our versatility and commitment to excellence.
              </p>
            </div>

            <div className="space-y-6 animate-fadeInRight">
              <h3 className="text-2xl font-semibold text-white dark:text-slate-900 mb-4">
                Technical Excellence
              </h3>
              <p className="text-lg text-slate-300 dark:text-slate-600 leading-relaxed">
                Behind every stunning visual lies cutting-edge technology and meticulous attention
                to detail. We leverage the latest tools and techniques in motion graphics,
                animation, and visual effects to bring ideas to life.
              </p>
              <p className="text-lg text-slate-300 dark:text-slate-600 leading-relaxed">
                Our team combines artistic sensibility with technical prowess, ensuring that
                every project is not just visually stunning but also optimized for its intended
                platform and audience.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-emerald-800 rounded-2xl p-8 md:p-12 text-center animate-scaleIn animate-stagger-3">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with the same passion and
              excellence you see in our showcase.
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              }}
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 animate-fadeInUp animate-stagger-1">
              <div className="text-4xl font-bold text-emerald-500 mb-2">100+</div>
              <div className="text-slate-300 dark:text-slate-600">Projects Completed</div>
            </div>
            <div className="p-6 animate-fadeInUp animate-stagger-2">
              <div className="text-4xl font-bold text-emerald-500 mb-2">50+</div>
              <div className="text-slate-300 dark:text-slate-600">Happy Clients</div>
            </div>
            <div className="p-6 animate-fadeInUp animate-stagger-3">
              <div className="text-4xl font-bold text-emerald-500 mb-2">5+</div>
              <div className="text-slate-300 dark:text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
