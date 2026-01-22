import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-full px-8 py-4">
        <div className="flex items-center gap-8">
          
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2 text-2xl font-black">
            <span className="text-pink-500">🌈</span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Dye-Nation
            </span>
          </Link> */}

          {/* Navigation Links center on screen */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-pink-500 font-semibold transition-colors hover:scale-110 transform"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-purple-500 font-semibold transition-colors hover:scale-110 transform"
            >
              About
            </Link>
            <Link 
              href="/sample" 
              className="text-gray-700 hover:text-cyan-500 font-semibold transition-colors hover:scale-110 transform"
            >
              Samples
            </Link>
            {/* Colourful gradient button code hehe */}
            {/* <Link 
              href="/" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Register Now!
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          {/* <button onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-700 text-2xl">
            ☰
          </button> */}
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-white/95 backdrop-blur-md rounded-full p-2 flex items-center justify-center text-3xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
          {isOpen && (
          <div className="absolute top-16 left-2 right-2 bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-6">
            <div className="flex flex-col gap-4 items-center">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-pink-500 font-bold text-base uppercase tracking-wide"
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-purple-500 font-bold text-base uppercase tracking-wide"
              >
                About
              </Link>
              
              <Link 
                href="/sample" 
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-cyan-500 font-bold text-base uppercase tracking-wide"
              >
                Rules
              </Link>
        </div>
      </div>
      )}
      </div>
      </div>
    </nav>
  )
}
