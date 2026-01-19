'use client'

import { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function About() {
  const [clickCount, setClickCount] = useState(0)


  const handleClick = () => {
    setClickCount(clickCount + 1)
  }

  return (
    <>
      <Navbar />
      <div className="pt-16">
        
        {/* What to Expect */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center text-white mb-4 drop-shadow-lg">
              What to Expect 🎊
            </h2>
            <p className="text-center text-white text-xl mb-12 max-w-3xl mx-auto">
              Join us for an amazing day of creativity, community service, and fun!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {/* Might wanna attach a link to the guide on what clothes here tho */}
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl p-8 shadow-2xl text-white transform hover:rotate-2 transition-transform">
                <div className="text-6xl mb-4">👔</div>
                <h3 className="text-3xl font-bold mb-4">Donate Clothes</h3>
                <p className="text-lg leading-relaxed">
                  Bring your gently used clothes and give them a second life. Every item helps someone in need! T-shirts, jeans, jackets - all welcome.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 shadow-2xl text-white transform hover:rotate-2 transition-transform">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-3xl font-bold mb-4">Free Tie-Dyeing</h3>
                <p className="text-lg leading-relaxed">
                  Create your own unique tie-dye masterpiece! All materials provided. Donate extra clothes = free tie-dye session!
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl p-8 shadow-2xl text-white transform hover:rotate-2 transition-transform">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-3xl font-bold mb-4">Make Impact</h3>
                <p className="text-lg leading-relaxed">
                  Your donations go directly to the Salvation Army, helping communities and individuals rebuild their lives.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center text-white mb-4 drop-shadow-lg">
              How It Works 🔄
            </h2>
            <p className="text-center text-white text-xl mb-12 max-w-3xl mx-auto">
              Four simple steps to make a difference and have fun!
            </p>
            
            <div className="max-w-4xl mx-auto space-y-6">
              
              <div className="bg-white/95 rounded-2xl p-8 shadow-xl flex items-start gap-6 hover:shadow-pink-500/50 transition-shadow">
                <div className="bg-pink-500 text-white text-3xl font-black w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Bring Your Clothes</h3>
                  <p className="text-gray-700 text-lg">
                    Bring any extra clothes you want to donate - t-shirts, jeans, jackets, anything gently used! Clean and in good condition.
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
                    Drop off your donations at our registration desk and receive your free tie-dye kit with colors, rubber bands, gloves, and instructions!
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
                    Design and dye your own unique piece at our creation stations! Our experienced team will help you create amazing spiral, crumple, or stripe patterns.
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
                    Your donated clothes will be professionally cleaned and sent to the Salvation Army to help those in need. Feel good, look good, do good!
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Make a Difference? 🚀
            </h2>
            <p className="text-2xl text-white mb-8 max-w-2xl mx-auto">
              Join us for a day of creativity, community, and compassion!
            </p>
            <button 
            onClick={handleClick}
            className="bg-white text-purple-600 px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:scale-110 transition-transform animate-bounce">
              Count Me In! 🎉
            </button>

            {/* Click Counter */}
            <div className="mt-6">
              <p className="text-white text-xl font-semibold bg-white/20 backdrop-blur-sm inline-block px-8 py-3 rounded-full">
                You have clicked this button <span className="font-black text-yellow-300">{clickCount}</span> times!
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

      </div>
    </>
  )
}
