'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { BlogArticleCard } from '@/components/BlogArticleCard'
import { Article } from '@/lib/datoCMS'

export function RecommendationsCarousel({ items }: { items: Article[] }) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: 'start',
  })
  if (!items.length) return <></>
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {items.map((item) => (
          <div key={item.slug} className="flex-[0_0_50%] px-2">
            <BlogArticleCard article={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
