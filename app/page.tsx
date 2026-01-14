export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 bg-gradient-animate">
      
      {/* Floating Emojis Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 text-6xl animate-bounce">👕</div>
        <div className="absolute top-40 right-20 text-5xl animate-bounce">🎨</div>
        <div className="absolute bottom-40 left-20 text-6xl animate-bounce">💖</div>
        <div className="absolute top-60 right-40 text-5xl animate-bounce">🌈</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-bounce">✨</div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
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
              <p className="text-gray-600 mt-1">Friday</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform border-4 border-purple-400">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Time</h3>
              <p className="text-xl text-gray-800 font-semibold">11:00 AM - 4:00 PM</p>
              <p className="text-gray-600 mt-1">Fun!</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform border-4 border-cyan-400">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-cyan-600 mb-2">Venue</h3>
              <p className="text-xl text-gray-800 font-semibold">Campus Centre</p>
              <p className="text-gray-600 mt-1">Level 1</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform border-4 border-yellow-400">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Beneficiary</h3>
              <p className="text-xl text-gray-800 font-semibold">Red Cross</p>
              <p className="text-gray-600 mt-1">Placeholder text</p>
            </div>

          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center text-white mb-12 drop-shadow-lg">
            What to Expect 🎊
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl p-8 shadow-2xl text-white transform hover:rotate-2 transition-transform">
              <div className="text-6xl mb-4">👔</div>
              <h3 className="text-3xl font-bold mb-4">Donate Clothes</h3>
              <p className="text-lg leading-relaxed">
                Bring your gently used clothes and give them a second life. Every item helps someone in need!
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 shadow-2xl text-white transform hover:rotate-2 transition-transform">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-3xl font-bold mb-4">Free Tie-Dyeing</h3>
              <p className="text-lg leading-relaxed">
                Create your own unique tie-dye masterpiece! All materials provided. Donate extra clothes = free session!
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl p-8 shadow-2xl text-white transform hover:rotate-2 transition-transform">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-3xl font-bold mb-4">Make Impact</h3>
              <p className="text-lg leading-relaxed">
                Your donations go directly to the Red Cross, helping communities and individuals in need.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center text-white mb-12 drop-shadow-lg">
            How It Works 🔄
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="bg-white/95 rounded-2xl p-8 shadow-xl flex items-start gap-6 hover:shadow-pink-500/50 transition-shadow">
              <div className="bg-pink-500 text-white text-3xl font-black w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bring Your Clothes</h3>
                <p className="text-gray-700 text-lg">
                  Bring any extra clothes you want to donate - t-shirts, jeans, jackets, anything gently used!
                </p>
              </div>
            </div>

            <div className="bg-white/95 rounded-2xl p-8 shadow-xl flex items-start gap-6 hover:shadow-purple-500/50 transition-shadow">
              <div className="bg-purple-500 text-white text-3xl font-black w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Your Tie-Dye Kit</h3>
                <p className="text-gray-700 text-lg">
                  Drop off your donations and receive your free tie-dye kit with colors, rubber bands, and instructions!
                </p>
              </div>
            </div>

            <div className="bg-white/95 rounded-2xl p-8 shadow-xl flex items-start gap-6 hover:shadow-cyan-500/50 transition-shadow">
              <div className="bg-cyan-500 text-white text-3xl font-black w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Create Your Masterpiece</h3>
                <p className="text-gray-700 text-lg">
                  Design and dye your own unique piece! Our team will help you create amazing patterns.
                </p>
              </div>
            </div>

            <div className="bg-white/95 rounded-2xl p-8 shadow-xl flex items-start gap-6 hover:shadow-yellow-500/50 transition-shadow">
              <div className="bg-yellow-500 text-white text-3xl font-black w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Make a Difference</h3>
                <p className="text-gray-700 text-lg">
                  Your donated clothes will be sent to the Red Cross to help those in need. Feel good, look good!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Make a Difference? 🚀
          </h2>
          <p className="text-2xl text-white mb-8 max-w-2xl mx-auto">
            Join us for a day of creativity, community, and compassion!
          </p>
          <button className="bg-white text-purple-600 px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:scale-110 transition-transform animate-bounce">
            Count Me In! 🎉
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Tie-Dye Donation Drive</h3>
          <p className="text-xl text-gray-300 mb-2">February 6, 2026 | 11am - 4pm | Campus Centre Lvl 1</p>
          <p className="text-lg text-gray-400 mb-6">
            Supporting the Red Cross • Hosted by EnROOT Group 6
          </p>
          <div className="flex justify-center gap-8 text-3xl">
            <span>🌈</span>
            <span>❤️</span>
            <span>✨</span>
            <span>🎨</span>
            <span>👕</span>
          </div>
          <p className="text-gray-500 mt-8">© 2026 EnROOT Group 6. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
