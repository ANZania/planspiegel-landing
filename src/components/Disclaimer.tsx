import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function Disclaimer() {
  return (
    <div className="mx-2 mt-24 rounded-3xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-wider text-sky-500 sm:text-left">
            DISCLAIMER
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <FadeIn>
            <p className="mt-10 text-xl text-white [text-wrap:balance]">
              This website is not a real company site; it is a project created
              by a student team at Chemnitz University of Technology as part of
              a semester Planspiel (simulation) project. The team operates under
              the advisorship of the VSR (Distributed and Self-organizing
              Systems) department within the Faculty of Computer Science. This
              non-profit website is solely for educational and study purposes.
            </p>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  )
}
