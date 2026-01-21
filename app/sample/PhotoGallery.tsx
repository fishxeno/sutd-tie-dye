'use client'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Image from 'next/image'

export default function PhotoGallery({ imagesrc }: { imagesrc: string[] }) {
  return (
    <Gallery>
      {imagesrc.map((src, i) => (
        <Item
          key={i}
          original={src}
          thumbnail={src}
          width="1200"
          height="1600"
        >
          {({ ref, open }) => (
            <Image
              ref={ref}
              onClick={open}
              src={src}
              style={{ cursor: 'pointer' }}
              alt={`Image ${i + 1}`}
              width="1200"
              height="1600"
              className="w-full h-64 object-cover rounded transition-shadow duration-300 rounded-3xl overflow-hidden mx-3 px-3 mt-10"
            />
          )}
        </Item>
      ))}
    </Gallery>
  )
}