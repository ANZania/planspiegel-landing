'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo } from '@/components/Logo'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'

import xLogo from '@/images/X_icon.svg'
import Image from 'next/image'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

export function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  pathname,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  pathname: string
  invert?: boolean
}) {
  const { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuLinks = [
    { href: '/', text: 'Demo' },
    { href: '/blog', text: 'Blog' },
    { href: '/about', text: 'About us' },
    { href: '/impressum', text: 'impressum' },
  ].filter((x) => x.href !== pathname)

  const twitter = (
    <Button href="https://x.com/PlanspiegelLabs" invert={invert}>
      <div className="flex flex-row items-center space-x-1.5">
        <p>Join us on</p>
        <Image src={xLogo} alt="X" className="-mt-1 h-3 w-3" />
      </div>
    </Button>
  )

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logo className="h-8" />
        </Link>
        <div className="flex items-center gap-x-8 md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <Icon className="h-7 w-7" />
          </button>
        </div>
        <div
          className={clsx(
            'fixed inset-0 z-50 bg-white p-4 transition-transform duration-300 md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="mt-6 flex items-center justify-between">
            <p className="text-lg font-semibold">Menu</p>
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <Icon className="h-7 w-7" />
            </button>
          </div>
          <ul className="mt-6 space-y-4">
            {menuLinks.map(({ href, text }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block font-semibold text-gray-700 hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">{twitter}</div>
        </div>
        <div className="hidden items-center gap-x-8 md:flex">
          <nav className="flex justify-end space-x-8 p-4 text-lg">
            <ul className="flex space-x-6">
              {menuLinks.map(({ href, text }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-semibold text-gray-700 underline hover:text-blue-500"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {twitter}
        </div>
      </div>
    </Container>
  )
}

function RootLayoutInner({
  interactive = true,
  pathname,
  children,
}: { pathname: string; interactive?: boolean } & React.PropsWithChildren) {
  const panelId = useId()
  const [expanded, setExpanded] = useState(false)
  const openRef = useRef<React.ElementRef<'button'>>(null)
  const closeRef = useRef<React.ElementRef<'button'>>(null)
  const navRef = useRef<React.ElementRef<'div'>>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            pathname={pathname}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                pathname={pathname}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our offices
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive={interactive}
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [logoHovered, setLogoHovered] = useState(false)
  const interactive =
    ['/blog'].filter((x) => pathname.startsWith(x)).length === 0
  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner
        key={pathname}
        pathname={pathname}
        interactive={interactive}
      >
        {children}
      </RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
