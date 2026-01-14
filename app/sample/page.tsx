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
      </div>
    </>
  )
}