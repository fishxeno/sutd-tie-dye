import Navbar from '../components/navbar'
import Footer from '../components/footer'
import 'photoswipe/dist/photoswipe.css'
import PhotoGallery from './PhotoGallery';

// Displays tie dye samples / template

export default async function Samples() {

  const sampleList: { id: number; imageUrl: string }[] = [
    { id: 1, imageUrl: '/samples/test.jpeg' },
    { id: 2, imageUrl: '/samples/test2.jpeg' },
    { id: 3, imageUrl: '/samples/test3.jpeg' },
    { id: 4, imageUrl: '/samples/test4.jpeg' },
    { id: 5, imageUrl: '/samples/test5.jpeg' }
  ];

  return (
    <>
      <Navbar />
      <div
  className="pt-16 min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/tie-dye.avif')" }}
>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center text-white mb-4 drop-shadow-lg">
              Samples
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <PhotoGallery imagesrc={sampleList.map(item => item.imageUrl)} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}