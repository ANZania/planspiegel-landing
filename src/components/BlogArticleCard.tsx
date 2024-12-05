import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/lib/datoCMS'
import { RegularMetaAttributes } from 'react-datocms'

type Props = { article: Article }
export function BlogArticleCard({ article }: Props) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-lg">
      <Link
        href={`/blog/${article.slug}`}
        className="pointer-events-auto block"
      >
        <Image
          layout="responsive"
          width={16}
          height={9}
          src={article.aiGeneratedImage.url}
          alt={article.aiGeneratedImage.alt}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold no-underline">{article.h1}</h2>
          <p>
            {
              article.seo.find(
                ({ attributes }) =>
                  (attributes as RegularMetaAttributes)?.name === 'description',
              )?.attributes?.content
            }
          </p>
          <span className="no-underline">
            {new Date(article.date).getDate()}.
            {new Date(article.date).getMonth()}.
            {new Date(article.date).getFullYear()}
          </span>
        </div>
      </Link>
    </div>
  )
}
