import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-black">
            <span className="text-pink-500">🌈</span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Tie-Dye Drive
            </span>
          </Link>

          {/* Navigation Links */}
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
          <button className="md:hidden text-gray-700 text-2xl">
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}
