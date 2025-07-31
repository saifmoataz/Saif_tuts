'use client'

import Header from '@/components/Header'
import ShowreelSection from '@/components/ShowreelSection'
import VideoGrid from '@/components/VideoGrid'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <ShowreelSection />
        <VideoGrid />
        <ContactSection />
      </main>
    </>
  )
}
