import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { StylizedImage } from './StylizedImage'
import muskPhoto from '@/images/musk.jpg'

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { logo: ImageProps['src']; name: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        {/* <div className="lg:flex lg:items-center lg:justify-end"> */}
          <FadeIn>
            <figure className="mx-auto max-w-4xl">
              <blockquote className="relative font-display text-3xl text-neutral-950 sm:text-5xl">
                <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                  {children}
                </p>
              </blockquote>
              <figcaption className="mt-10 flex flex-row items-center space-x-4">
                {/* <Image src={client.logo} className='w-16 h-16' alt={client.name} /> */}
                <p className="text-2xl font-display italic text-slate-600">{client.name}</p>
              </figcaption>
            </figure>
          </FadeIn>
          {/* <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={muskPhoto}
                className="ml-20 max-w-sm sm:ml-60 justify-center lg:justify-end sm:max-w-md"
              />
            </FadeIn>
          </div> */}
        {/* </div> */}
      </Container>
    </div>
  )
}
