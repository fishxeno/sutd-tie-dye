import Link from 'next/link'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4 z-10">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 animate-glow">
              TIE-DYE 🌈 DONATION DRIVE
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-300 font-bold mb-8 drop-shadow-lg">
              Donate Clothes. Create Art. Change Lives. ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold shadow-2xl hover:scale-110 transition-transform hover:shadow-pink-500/50">
                🎉 I'm Coming!
              </button>
              <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full text-xl font-bold shadow-2xl hover:scale-110 transition-transform hover:shadow-cyan-500/50">
                📅 Add to Calendar
              </button>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform border-4 border-pink-400">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-pink-600 mb-2">Date</h3>
                <p className="text-xl text-gray-800 font-semibold">February 6, 2026</p>
                <p className="text-gray-600 mt-1">Thursday</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform border-4 border-purple-400">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Time</h3>
                <p className="text-xl text-gray-800 font-semibold">11:00 AM - 4:00 PM</p>
                <p className="text-gray-600 mt-1">5 hours of fun!</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform border-4 border-cyan-400">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-cyan-600 mb-2">Venue</h3>
                <p className="text-xl text-gray-800 font-semibold">Campus Centre</p>
                <p className="text-gray-600 mt-1">Main Hall</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform border-4 border-yellow-400">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">Beneficiary</h3>
                <p className="text-xl text-gray-800 font-semibold">Red Cross</p>
                <p className="text-gray-600 mt-1">Supporting communities</p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA to Learn More */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-black text-white mb-6">
              Want to Know More? 🎨
            </h2>
            <p className="text-2xl text-white mb-8 max-w-2xl mx-auto">
              Learn about what to expect and how the event works!
            </p>
            <Link href="/about">
              <button className="bg-white text-purple-600 px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:scale-110 transition-transform">
                Learn More →
              </button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
