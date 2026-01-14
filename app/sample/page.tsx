import Navbar from '../components/navbar'

// Displays tie dye samples / template
export default function Samples() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 bg-gradient-animate pt-16">

        {/* Sample Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center text-white mb-4 drop-shadow-lg">
              Samples
            </h2>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 relative z-10">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">DYE-NATION</h3>
            <p className="text-xl text-gray-300 mb-2">February 6, 2026 | 11am - 4pm | Campus Centre</p>
            <p className="text-lg text-gray-400 mb-6">
              Supporting the Red Cross • Hosted by EnROOT Group 6
            </p>
            {/* Can attach links here*/}
            <div className="flex justify-center gap-8 text-3xl">
              <span>🌈</span>
              <span>❤️</span>
              <span>✨</span>
              <span>🎨</span>
              <span>👕</span>
            </div>
            <p className="mt-6 text-gray-500">🎨 Let your creativity shine. Help those in need. February 6, 2026 🎨</p>
            <p className="text-gray-500 mt-8">© 2026 EnROOT Group 6. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}