'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { toast, Toaster } from 'react-hot-toast'
import clsx from 'clsx'

export function LeaveEmail({ className }: { className?: string }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Email successfully submitted!')
  }

  return (
    <Container className={clsx('h-full', className)}>
      <Toaster position="top-right" reverseOrder={false} />

      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <h3 className="font-display text-base font-semibold text-white">
          Leave your email
        </h3>
        <form
          className="mt-6 flex items-center space-x-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-white/10 bg-neutral-900 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          <Button type="submit" invert>
            Submit
          </Button>
        </form>
      </FadeIn>
    </Container>
  )
}
