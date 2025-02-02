import { Container } from '@/components/Container'
import { ChatButton } from '@/components/ChatButton'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import clsx from 'clsx'

export function Disclaimer({ className }: { className?: string }) {
  return (
    <div className={clsx("mx-2 mt-24 rounded-3xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56", className)}>
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
            <p className="mt-5 text-xl text-white ">
                Let's check with your website URL with us.
            </p>
            <ChatButton className="flex py-2.5" titleName="TRY IT NOW" />
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  )
}
