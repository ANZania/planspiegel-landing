import { Container } from '@/components/Container'
import { Disclaimer } from '@/components/Disclaimer'
import { Article, performRequest } from '@/lib/datoCMS'
import Image from 'next/image'
import Link from 'next/link'
import { RegularMetaAttributes } from 'react-datocms'

export default async function BlogPage() {
  const { allArticles } = await performRequest<{ allArticles: Article[] }>(`
    {
      allArticles {
        h1
        slug
        aiGeneratedImage {
          url
          alt
        }
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
        date: _firstPublishedAt
      }
    }`)

  return (
    <>
      <Container className="mt-6 sm:mt-8 md:mt-14">
        <h1 className="mb-8 text-center text-4xl font-bold">Blog</h1>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allArticles.map((article) => (
            <li
              key={article.slug}
              className="relative overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-lg"
            >
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
                  <h2 className="text-lg font-semibold no-underline">
                    {article.h1}
                  </h2>
                  <p>
                    {
                      article.seo.find(
                        ({ attributes }) =>
                          (attributes as RegularMetaAttributes)?.name ===
                          'description',
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
            </li>
          ))}
        </ul>
      </Container>
      <Disclaimer />
    </>
  )
}
