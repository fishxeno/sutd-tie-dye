import Navbar from '../components/navbar'
import Footer from '../components/footer'

// Displays tie dye samples / template
export default function Samples() {
  return (
    <>
      <Navbar />
      <div className="pt-16">

        {/* Sample Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center text-white mb-4 drop-shadow-lg">
              Samples
            </h2>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}