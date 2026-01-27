import Navbar from '../components/navbar'
import Footer from '../components/footer'
import 'photoswipe/dist/photoswipe.css'
import PhotoGallery from './PhotoGallery';

// Displays tie dye samples / template

export default async function Samples() {

  const sampleList: { id: number; imageUrl: string }[] = [
    // { id: 1, imageUrl: '/samples/test.jpeg' },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center text-white mb-4 drop-shadow-lg">
              Samples
            </h2>
            <div>
              <p className="text-center text-white mb-4 drop-shadow-lg px-10 font-black drop-shadow-lg mt-10 sm:text-md md:text-lg lg:text-xl">
                On this page you will see a collection of tie dye samples that showcase various techniques and color combinations done by the students.
                 Use these samples as inspiration for your own custom designs!
              </p>
            </div>
            <div>
              <p className="text-center text-white drop-shadow-lg px-10 drop-shadow-lg sm:text-xs md:text-sm lg:text-md">
                If you don&apos;t see any samples here, it means that no students have submitted their designs yet.
                Encourage your classmates to participate and share their creativity!
              </p>
            </div>
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