'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import content from '@/content/es.json'

export default function WhatsAppFloat() {
  const [showPulse, setShowPulse] = useState(true)

  const whatsappUrl = content.navigation?.ctaHref || '#'

  useEffect(() => {
    // Stop pulsing after 6 seconds
    const timer = setTimeout(() => setShowPulse(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-whatsapp)] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:brightness-110 ${
        showPulse ? 'animate-pulse' : ''
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}
