'use client'

import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await fetch('https://script.google.com/macros/s/AKfycbw3e_5W8ONyVMAgUhYSbiyhXxMR_OFmCcs5QUU_EvqetUMgZGgLg1sgS3gTB1IZ_2b6/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      })

      alert('Your message has been sent!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Submission failed:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-emerald-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's start a conversation about your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Email</p>
                      <p className="text-slate-600 dark:text-slate-300">saifosam.business@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Location</p>
                      <p className="text-slate-600 dark:text-slate-300">Egypt, Cairo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors text-slate-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors text-slate-800 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors resize-none text-slate-800 dark:text-white"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
