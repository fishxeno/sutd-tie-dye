import Navbar from '../components/navbar'
import Footer from '../components/footer'
import path from 'path/win32';
import fs from 'fs/promises';
import 'photoswipe/dist/photoswipe.css'
import PhotoGallery from './PhotoGallery';

// Displays tie dye samples / template

export const dynamic = 'force-dynamic';

export default async function Samples() {

  const sampleList: { id: number; imageUrl: string }[] = [];
  const imageDirectory = path.join(process.cwd(), '/public/samples');
  const imageFilenames = await fs.readdir(imageDirectory)
  console.log(imageFilenames);
  imageFilenames.forEach((filename, index) => {
    sampleList.push({ id: index, imageUrl: `/samples/${filename}` });
  });

  return (
    <>
      <Navbar />
      <div className="pt-16">
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