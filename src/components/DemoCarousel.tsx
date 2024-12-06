'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import imageDemo1 from '@/images/demo/2024-12-06_01.47.00.jpg'
import imageDemo2 from '@/images/demo/2024-12-06_01.47.10.jpg'
import imageDemo3 from '@/images/demo/2024-12-06_01.47.13.jpg'
import imageDemo4 from '@/images/demo/2024-12-06_01.47.17.jpg'
import imageDemo5 from '@/images/demo/2024-12-06_01.47.20.jpg'
import imageDemo6 from '@/images/demo/2024-12-06_01.47.23.jpg'

const items = [
  { src: imageDemo1 },
  { src: imageDemo2 },
  { src: imageDemo3 },
  { src: imageDemo4 },
  { src: imageDemo5 },
  { src: imageDemo6 },
]

export function DemoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: 'start',
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative mx-auto mt-10 max-h-[70vh] w-full overflow-hidden lg:max-w-[70vw]">
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex" ref={emblaRef}>
        <div className="flex">
          {items.map((item, i) => (
            <div key={i} className="max max-h-[70vh] flex-[0_0_100%] px-2">
              <Image
                alt="slide"
                src={item.src}
                className="aspect-[9/12] h-full w-full object-scale-down object-top transition duration-500 motion-safe:group-hover:scale-105 lg:aspect-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
