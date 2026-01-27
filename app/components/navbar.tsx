import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-auto px-4">
      <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-full px-4 sm:px-8 py-3 sm:py-4">
        <div className="flex items-center gap-4 sm:gap-8">
          
          <Link 
            href="/" 
            className="text-gray-700 hover:text-pink-500 font-semibold text-sm sm:text-base transition-colors hover:scale-110 transform whitespace-nowrap"
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-purple-500 font-semibold text-sm sm:text-base transition-colors hover:scale-110 transform whitespace-nowrap"
          >
            About
          </Link>
          
          <Link 
            href="/sample" 
            className="text-gray-700 hover:text-cyan-500 font-semibold text-sm sm:text-base transition-colors hover:scale-110 transform whitespace-nowrap"
          >
            Samples
          </Link>

        </div>
      </div>
    </nav>
  )
}
