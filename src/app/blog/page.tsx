import { BlogArticleCard } from '@/components/BlogArticleCard'
import { Container } from '@/components/Container'
import { Disclaimer } from '@/components/Disclaimer'
import { Article, performRequest } from '@/lib/datoCMS'

export default async function BlogPage() {
  const { allArticles } = await performRequest<{
    allArticles: Article[]
  }>(`
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
            <li key={article.slug} className="h-full">
              <BlogArticleCard article={article} />
            </li>
          ))}
        </ul>
      </Container>
      <Disclaimer />
    </>
  )
}
