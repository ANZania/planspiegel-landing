import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export default function HomePage() {
  return (
    <Container className="mt-20">
      <FadeIn>
        <h1 className="text-center">
          <span className="block font-display text-base font-semibold text-neutral-950">
            Planspiegel
          </span>
          <span className="sr-only"> - </span>
          <span className="mt-6 block font-display text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            SECURITY BY CHAT
          </span>
          <span className="sr-only"> - </span>
          <span className="mt-6 block font-display text-base font-semibold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Leave your email
          </span>
        </h1>
      </FadeIn>
    </Container>
  )
}
