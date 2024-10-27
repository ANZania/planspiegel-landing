import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import muskPhoto from '@/images/musk.png'
import imageANZania from '@/images/team/anzania.jpg'
import imageMskkote from '@/images/team/mskkote.jpg'
import imageDavid from '@/images/team/david.png'
import imageZadafiya from '@/images/team/zadafiya.png'
import imagePratiksha from '@/images/team/pratiksha.jpg'
import Image from 'next/image'
import { TagList, TagListItem } from '@/components/TagList'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'

function Disclaimer() {
  return (
    <div className="mx-2 mt-24 rounded-3xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="font-roboto_c text-center text-3xl font-semibold tracking-wider text-orange-600 sm:text-left">
            DISCLAIMER
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <FadeIn>
            <p className="font-roboto_c mt-10 text-2xl text-white [text-wrap:balance]">
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

// function Services() {
//   return (
//     <>
//       <SectionIntro
//         eyebrow="Services"
//         title="We help you identify, explore and respond to new opportunities."
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           As long as those opportunities involve giving us money to re-purpose
//           old projects — we can come up with an endless number of those.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <div className="lg:flex lg:items-center lg:justify-end">
//           <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
//             <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
//               <StylizedImage
//                 src={imageLaptop}
//                 sizes="(min-width: 1024px) 41rem, 31rem"
//                 className="justify-center lg:justify-end"
//               />
//             </FadeIn>
//           </div>
//           <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
//             <ListItem title="Web development">
//               We specialise in crafting beautiful, high quality marketing pages.
//               The rest of the website will be a shell that uses lorem ipsum
//               everywhere.
//             </ListItem>
//             <ListItem title="Application development">
//               We have a team of skilled developers who are experts in the latest
//               app frameworks, like Angular 1 and Google Web Toolkit.
//             </ListItem>
//             <ListItem title="E-commerce">
//               We are at the forefront of modern e-commerce development. Which
//               mainly means adding your logo to the Shopify store template we’ve
//               used for the past six years.
//             </ListItem>
//             <ListItem title="Custom content management">
//               At Studio we understand the importance of having a robust and
//               customised CMS. That’s why we run all of our client projects out
//               of a single, enormous Joomla instance.
//             </ListItem>
//           </List>
//         </div>
//       </Container>
//     </>
//   )
// }

function Team() {
  return (
    <>
      <Container className="mt-20">
        <FadeIn>
          <h1 className="text-center">
            <span className="block font-display text-base font-semibold text-neutral-950">
              Let&apos;s drive forward!
            </span>
            <span className="sr-only"> - </span>
            <span className="mt-6 block font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              Our team
            </span>
          </h1>
        </FadeIn>
      </Container>
      <div className="flex flex-col space-y-20 divide-y-2">
        <Container className="pt-10 lg:pt-20">
          <div className="lg:flex lg:items-stretch lg:justify-end">
            <div className="lg:pb-none flex flex-grow justify-center pb-10 lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[15rem] flex-none lg:w-[20rem]">
                <Link href="https://linktr.ee/mskVitalii" target="_blank">
                  <div className="group relative h-full overflow-hidden rounded-3xl bg-neutral-100">
                    <Image
                      alt=""
                      src={imageANZania}
                      className="aspect-square h-full min-h-full w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 lg:aspect-auto"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                      <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                        Anastasiia Zibrova
                      </p>
                      <p className="mt-2 text-sm text-white">
                        Frontend developer
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
            <div className="flex w-full flex-col">
              <FadeIn>
                <div className="space-y-6 text-base text-neutral-600 [text-wrap:balance]">
                  <p>
                    As a frontend developer with a background in business
                    information, passionate about creating{' '}
                    <strong className="font-semibold text-neutral-950">
                      high-performing
                    </strong>{' '}
                    web applications, I&apos;m excited to bring my skills to the
                    project. With experience in building MVPs for fast-paced
                    environments, I turn concepts into{' '}
                    <strong className="font-semibold text-neutral-950">
                      user-centered
                    </strong>{' '}
                    solutions quickly and effectively. I thrive in agile,
                    collaborative settings and enjoy working closely with the
                    team to develop applications that are both intuitive and
                    aligned with our vision.
                  </p>
                  <p>
                    For this project, I&apos;m committed to making{' '}
                    <strong className="font-semibold text-neutral-950">
                      every detail
                    </strong>{' '}
                    count — from ensuring cross-browser compatibility to
                    enhancing accessibility for all users. My approach is rooted
                    in aligning design and functionality with both{' '}
                    <strong className="font-semibold text-neutral-950">
                      the goals
                    </strong>{' '}
                    of our startup and{' '}
                    <strong className="font-semibold text-neutral-950">
                      the needs
                    </strong>{' '}
                    of our audience. I&apos;m ready to dive deep into our
                    project objectives and contribute my skills to create
                    something truly impactful by the end of the semester.
                  </p>
                </div>

                <h3 className="mt-10 font-display text-base font-semibold text-neutral-950">
                  Skills and tools
                </h3>
                <TagList className="mt-4">
                  <TagListItem>React Ecosystem</TagListItem>
                  <TagListItem>Test-Driven Development</TagListItem>
                  <TagListItem>Requirenments Gathering</TagListItem>
                  <TagListItem>Agile Development</TagListItem>
                  <TagListItem>UI/UX design</TagListItem>
                  <TagListItem>Customer Development</TagListItem>
                </TagList>
              </FadeIn>
            </div>
          </div>
        </Container>
        <Container className="pt-10 lg:pt-20">
          <div className="lg:flex lg:items-stretch lg:justify-end">
            <div className="lg:pb-none flex flex-grow justify-center pb-10 lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[15rem] flex-none lg:w-[20rem]">
                <Link href="https://linktr.ee/mskVitalii" target="_blank">
                  <div className="group relative h-full overflow-hidden rounded-3xl bg-neutral-100">
                    <Image
                      alt=""
                      src={imageMskkote}
                      className="aspect-square h-full min-h-full w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 lg:aspect-auto"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                      <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                        Vitalii Popov
                      </p>
                      <p className="mt-2 text-sm text-white">
                        Fullstack developer
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
            <div className="flex w-full flex-col">
              <FadeIn>
                <div className="space-y-6 text-base text-neutral-600 [text-wrap:balance]">
                  <p>
                    With over three years of full-stack development experience,
                    I specialize in crafting scalable backend solutions and
                    seamless integrations for complex systems. My background
                    includes working on enterprise e-commerce projects like OZON
                    and travel platforms such as OnlineTours. Skilled in{' '}
                    <strong className="font-semibold text-neutral-950">
                      Go
                    </strong>
                    ,{' '}
                    <strong className="font-semibold text-neutral-950">
                      C#
                    </strong>
                    , and{' '}
                    <strong className="font-semibold text-neutral-950">
                      Node.js
                    </strong>{' '}
                    for backend, as well as React and other frameworks on the
                    frontend, I bring a robust, full-stack approach to
                    development.
                  </p>
                  <p>
                    For this project, I’m leveraging my experience in{' '}
                    <strong className="font-semibold text-neutral-950">
                      database management
                    </strong>{' '}
                    and{' '}
                    <strong className="font-semibold text-neutral-950">
                      infrastructure tools
                    </strong>{' '}
                    — from PostgreSQL and ElasticSearch to Docker and Kubernetes
                    — to build a resilient, data-driven foundation. I’m also
                    passionate about knowledge sharing; a recent article I wrote
                    gained over 5k views on Habr, Dev, Medium, and LinkedIn,
                    earning recognition from my professor for the
                    Deutschlandstipendium.
                  </p>
                  <p>
                    In my free time, I enjoy{' '}
                    <strong className="font-semibold text-neutral-950">
                      Lindy Hop dance
                    </strong>
                    ,{' '}
                    <strong className="font-semibold text-neutral-950">
                      sword fighting
                    </strong>
                    , and{' '}
                    <strong className="font-semibold text-neutral-950">
                      hiking
                    </strong>{' '}
                    in the beautiful landscapes of Saxony, finding balance and
                    inspiration for my work.
                  </p>
                </div>

                <h3 className="mt-10 font-display text-base font-semibold text-neutral-950">
                  Skills and tools
                </h3>
                <TagList className="mt-4">
                  <TagListItem>Go</TagListItem>
                  <TagListItem>C#</TagListItem>
                  <TagListItem>Node.js</TagListItem>
                  <TagListItem>PostgreSQL</TagListItem>
                  <TagListItem>ElasticSearch</TagListItem>
                  <TagListItem>MongoDB</TagListItem>
                  <TagListItem>Firebase</TagListItem>
                  <TagListItem>React, Angular, JS/TS</TagListItem>
                  <TagListItem>Docker</TagListItem>
                  <TagListItem>Kubernetes</TagListItem>
                  <TagListItem>Prometheus</TagListItem>
                  <TagListItem>Grafana</TagListItem>
                  <TagListItem>
                    Content Creation & Technical Writing
                  </TagListItem>
                </TagList>
              </FadeIn>
            </div>
          </div>
        </Container>
        <Container className="pt-10 lg:pt-20">
          <div className="lg:flex lg:items-stretch lg:justify-end">
            <div className="lg:pb-none flex flex-grow justify-center pb-10 lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[15rem] flex-none lg:w-[20rem]">
                <Link href="https://linktr.ee/mskVitalii" target="_blank">
                  <div className="group relative h-full overflow-hidden rounded-3xl bg-neutral-100">
                    <Image
                      alt=""
                      src={imageZadafiya}
                      className="aspect-square h-full min-h-full w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 lg:aspect-auto"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                      <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                        Megha Bhupatbhai Zadafiya
                      </p>
                      <p className="mt-2 text-sm text-white">
                        Fullstack developer
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
            <div className="flex w-full flex-col">
              <FadeIn>
                <div className="space-y-6 text-base text-neutral-600 [text-wrap:balance]">
                  <p>
                    With five years of full-stack development experience, I
                    specialize in building efficient, user-focused web
                    applications from the backend to the frontend. My background
                    includes developing{' '}
                    <strong className="font-semibold text-neutral-950">
                      robust systems and interfaces
                    </strong>{' '}
                    using PHP, Node.js, React.js, Vue.js, and a range of other
                    frameworks. Skilled in creating and managing databases with
                    PostgreSQL, ElasticSearch, MongoDB, and Firebase, I bring a
                    holistic approach to{' '}
                    <strong className="font-semibold text-neutral-950">
                      database design and integration
                    </strong>{' '}
                    .
                  </p>
                  <p>
                    For this project, I’m leveraging my expertise to create
                    smooth, user-centered interfaces and scalable
                    infrastructures. I’m skilled in implementing new features
                    based on{' '}
                    <strong className="font-semibold text-neutral-950">
                      user feedback
                    </strong>{' '}
                    and troubleshooting existing code, ensuring that every
                    solution aligns with both the technical and user
                    requirements. My experience with payment gateways like
                    Stripe, Razorpay, Dwolla, and PayPal allows me to implement
                    secure and reliable transaction flows
                  </p>
                  <p>
                    In my free time, I enjoy practicing{' '}
                    <strong className="font-semibold text-neutral-950">
                      yoga
                    </strong>
                    ,{' '}
                    <strong className="font-semibold text-neutral-950">
                      cooking
                    </strong>
                    ,{' '}
                    <strong className="font-semibold text-neutral-950">
                      watching movies
                    </strong>
                    , and playing{' '}
                    <strong className="font-semibold text-neutral-950">
                      football
                    </strong>
                    . I’m excited to bring my skills in both technical
                    development and problem-solving to the team, creating
                    meaningful, user-driven solutions.
                  </p>
                </div>

                <h3 className="mt-10 font-display text-base font-semibold text-neutral-950">
                  Skills and tools
                </h3>
                <TagList className="mt-4">
                  <TagListItem>PHP (Laravel, CodeIgniter)</TagListItem>
                  <TagListItem>Node.js</TagListItem>
                  <TagListItem>PostgreSQL</TagListItem>
                  <TagListItem>ElasticSearch</TagListItem>
                  <TagListItem>MongoDB</TagListItem>
                  <TagListItem>Firebase</TagListItem>
                  <TagListItem>React, Angular, Vue.js, JS/TS</TagListItem>
                  <TagListItem>Docker</TagListItem>
                  <TagListItem>AWS</TagListItem>
                  <TagListItem>Payment Integration</TagListItem>
                </TagList>
              </FadeIn>
            </div>
          </div>
        </Container>
        <Container className="pt-10 lg:pt-20">
          <div className="lg:flex lg:items-stretch lg:justify-end">
            <div className="lg:pb-none flex flex-grow justify-center pb-10 lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[15rem] flex-none lg:w-[20rem]">
                <Link href="https://linktr.ee/mskVitalii" target="_blank">
                  <div className="group relative h-full overflow-hidden rounded-3xl bg-neutral-100">
                    <Image
                      alt=""
                      src={imageDavid}
                      className="aspect-square h-full min-h-full w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 lg:aspect-auto"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                      <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                        Yihong Zhai
                      </p>
                      <p className="mt-2 text-sm text-white">
                        Network Engineer & DevSecOps
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
            <div className="flex w-full flex-col">
              <FadeIn>
                <div className="space-y-6 text-base text-neutral-600 [text-wrap:balance]">
                  <p>
                    With a solid foundation in{' '}
                    <strong className="font-semibold text-neutral-950">
                      cybersecurity
                    </strong>{' '}
                    and experience in penetration testing, I specialize in
                    deploying and maintaining secure systems with expertise
                    across both frontend development and backend operations. My
                    background includes working at a cybersecurity company in
                    China, where I honed skills in{' '}
                    <strong className="font-semibold text-neutral-950">
                      Python
                    </strong>
                    ,{' '}
                    <strong className="font-semibold text-neutral-950">
                      C
                    </strong>{' '}
                    programming, and{' '}
                    <strong className="font-semibold text-neutral-950">
                      Linux
                    </strong>{' '}
                    operations. Alongside practical experience in project
                    deployment, I bring knowledge in networking, including
                    routing and switching, which enhances my approach to
                    building reliable, secure infrastructures.
                  </p>
                  <p>
                    For this project, I’m leveraging my experience in{' '}
                    <strong className="font-semibold text-neutral-950">
                      AI vision
                    </strong>{' '}
                    and{' '}
                    <strong className="font-semibold text-neutral-950">
                      embedded systems
                    </strong>{' '}
                    from my undergraduate research, where I co-authored a paper
                    published with IEEE on real-time waste detection
                    algorithms*. I’m excited to bring my technical and academic
                    experience to this team, collaborating to create innovative
                    solutions while sharing insights from my work in
                    cybersecurity and system development.
                  </p>
                  <p className="text-neutral-500">
                    * - S. Peng, Y. Zhai, Z. Chen, H. Lu, Z. Zhu and S. Wang,
                    &quot;Real-time Waste Detection Algorithm Based on Optimized
                    PicoDet,&quot; 2022 4th International Conference on
                    Intelligent Control, Measurement and Signal Processing
                    (ICMSP), Hangzhou, China, 2022, pp. 1073-1077, doi:
                    10.1109/ICMSP55950.2022.9858971
                  </p>
                </div>

                <h3 className="mt-10 font-display text-base font-semibold text-neutral-950">
                  Skills and tools
                </h3>
                <TagList className="mt-4">
                  <TagListItem>Network Security</TagListItem>
                  <TagListItem>Penetration Testing</TagListItem>
                  <TagListItem>Python</TagListItem>
                  <TagListItem>C</TagListItem>
                  <TagListItem>Linux Operations</TagListItem>
                  <TagListItem>Project Deployment</TagListItem>
                  <TagListItem>Research & Technical Writing</TagListItem>
                </TagList>
              </FadeIn>
            </div>
          </div>
        </Container>
        <Container className="pt-10 lg:pt-20">
          <div className="lg:flex lg:items-stretch lg:justify-end">
            <div className="lg:pb-none flex flex-grow justify-center pb-10 lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[15rem] flex-none lg:w-[20rem]">
                <Link href="https://linktr.ee/mskVitalii" target="_blank">
                  <div className="group relative h-full overflow-hidden rounded-3xl bg-neutral-100">
                    <Image
                      alt=""
                      src={imagePratiksha}
                      className="aspect-square h-full min-h-full w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 lg:aspect-auto"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                      <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                        Pratiksha Kakasaheb Gawande
                      </p>
                      <p className="mt-2 text-sm text-white">
                        Fullstack developer
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
            <div className="flex w-full flex-col">
              <FadeIn>
                <div className="space-y-6 text-base text-neutral-600 [text-wrap:balance]">
                  <p>
                    As a motivated developer with a foundational knowledge of{' '}
                    <strong className="font-semibold text-neutral-950">
                      Python
                    </strong>
                    ,{' '}
                    <strong className="font-semibold text-neutral-950">
                      cloud computing
                    </strong>
                    , and{' '}
                    <strong className="font-semibold text-neutral-950">
                      Linux
                    </strong>
                    , I’m eager to expand my skills and contribute to impactful
                    projects. I’m comfortable with SQL, DBMS, and data
                    structures, and I have a growing interest in{' '}
                    <strong className="font-semibold text-neutral-950">
                      AI models
                    </strong>{' '}
                    and{' '}
                    <strong className="font-semibold text-neutral-950">
                      Generative AI
                    </strong>
                    . Although I’m just starting in my career, I bring a fresh
                    perspective and a willingness to dive into new technologies
                    and frameworks.
                  </p>
                  <p>
                    For this project, I’m looking forward to leveraging my
                    understanding of AWS and Azure and gaining hands-on
                    experience in team coordination, research, and agile
                    methodologies like Scrum. My background in event management
                    and teamwork has equipped me with the organizational skills
                    needed to contribute effectively in{' '}
                    <strong className="font-semibold text-neutral-950">
                      collaborative settings
                    </strong>
                    . I’m excited to work alongside other team members and make
                    a meaningful impact on the project.
                  </p>
                </div>

                <h3 className="mt-10 font-display text-base font-semibold text-neutral-950">
                  Skills and tools
                </h3>
                <TagList className="mt-4">
                  <TagListItem>Python</TagListItem>
                  <TagListItem>Cloud Computing</TagListItem>
                  <TagListItem>AWS</TagListItem>
                  <TagListItem>Azure</TagListItem>
                  <TagListItem>SQL</TagListItem>
                  <TagListItem>Generative AI</TagListItem>
                  <TagListItem>DSA</TagListItem>
                  <TagListItem>Team Coordination</TagListItem>
                  <TagListItem>Research</TagListItem>
                </TagList>
              </FadeIn>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export const metadata: Metadata = {
  description:
    "Chemnitz needs new startup heroes. Together, we're crafting innovative solutions through collaboration, creativity, and strategic vision. Our mission is to mirror real-world challenges and transform them into forward-thinking, impactful strategies. Join us as we shape the future, one idea at a time.",
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-roboto_c text-5xl font-medium text-neutral-950 [text-wrap:balance] sm:text-7xl">
            <span className="text-orange-600">Reflecting</span> ideas, Shaping
            futures
          </h1>
          <p className="font-roboto_c mt-6 text-2xl text-neutral-600">
            Chemnitz needs new startup heroes. Together, we’re crafting
            innovative solutions through collaboration, creativity, and
            strategic vision. Our mission is to mirror real-world challenges and
            transform them into forward-thinking, impactful strategies. Join us
            as we shape the future, one idea at a time.
          </p>
        </FadeIn>
      </Container>

      <Disclaimer />

      <Team />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Elon Musk', logo: muskPhoto }}
      >
        An <span className="text-orange-600">entrepreneur</span> is someone who
        jumps off a cliff and builds a plane on the way down.
      </Testimonial>

      {/* <Services /> */}

      <ContactSection />
    </>
  )
}
