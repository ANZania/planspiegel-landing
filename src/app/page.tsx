import { Container } from '@/components/Container'
import { DemoCarousel } from '@/components/DemoCarousel'
import { Disclaimer } from '@/components/Disclaimer'
import { FadeIn } from '@/components/FadeIn'
import { LeaveEmail } from '@/components/LeaveEmailForm'
import { ChatButton } from '@/components/ChatButton'

export default function HomePage() {
  return (
    <>
      <Container className="mt-20">
        <FadeIn>
          <h1 className="text-center">
            <span className="block font-display text-base font-semibold text-neutral-950">
              Planspiegel presents
            </span>
            <span className="sr-only"> - </span>
            <span className="mt-6 block font-display text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              SECURITY BY CHAT
            </span>
          </h1>
        </FadeIn>
      </Container>

      <div className="mx-auto mt-10 max-w-2xl px-6 lg:max-w-none lg:px-8">
        <FadeIn>
          <ChatButton className="block text-center" text="Ready to Use" />
        </FadeIn>
      </div>

      <div className="mx-auto mt-10 max-w-2xl px-6 lg:max-w-none lg:px-8">
        <FadeIn>
          <h2 className="block text-center font-display text-base font-semibold text-neutral-950">
            Demo
          </h2>
          <DemoCarousel />
        </FadeIn>
      </div>

      <div className="mt-24 flex h-1/2 flex-col gap-8 sm:mt-32 lg:mt-40 lg:flex-row">
        <LeaveEmail className="basis-1/2" />
        <Disclaimer className="!mt-0 basis-1/2" />
      </div>
    </>
  )
}
