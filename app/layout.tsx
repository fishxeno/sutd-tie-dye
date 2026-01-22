import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dye-Nation | Tie-Dye Donation Drive',
  description: 'Join us for a vibrant clothes donation drive with free tie-dyeing! February 6, 2026 at Campus Centre Level 1.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Animated Background */}
        {/* <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 bg-gradient-animate"> */}
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-gradient-blur-md">
          
          {/* Floating Emojis Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
            <div className="absolute top-20 left-10 text-6xl animate-bounce">👕</div>
            <div className="absolute top-40 right-20 text-5xl animate-bounce">🎨</div>
            <div className="absolute bottom-40 left-20 text-6xl animate-bounce">💖</div>
            <div className="absolute top-60 right-40 text-5xl animate-bounce">🌈</div>
            <div className="absolute bottom-20 right-10 text-6xl animate-bounce">✨</div>
          </div>

          {/* Page Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
