import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import Image from 'next/image'

import xLogoInvert from '@/images/X_icon_invert.svg'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Let’s jump off a cliff together!
            </h2>
            <div className="mt-6 flex">
              <Button href="https://x.com/PlanspiegelLabs" invert>
                <div className="flex flex-row items-center space-x-1.5">
                  <p>Join us on</p>
                  <Image src={xLogoInvert} alt="X" className="-mt-1 h-3 w-3" />
                </div>
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our location
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
