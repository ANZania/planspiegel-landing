import { Container } from '@/components/Container'
import { Disclaimer } from '@/components/Disclaimer'
import { Article, performRequest } from '@/lib/datoCMS'

export default async function BlogPage() {
  const { allArticles } = await performRequest<{ allArticles: Article[] }>(`
    {
      allArticles {
        h1
        slug
      }
    }`)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <h1 className="mb-8 text-center text-4xl font-bold">Blog</h1>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allArticles.map((article) => (
            <li
              key={article.slug}
              className="relative rounded-lg border bg-white p-4 transition-shadow hover:shadow-lg"
            >
              <a
                href={`/blog/${article.slug}`}
                className="pointer-events-auto block text-lg font-semibold text-blue-600 hover:underline"
              >
                <h2>{article.h1}</h2>
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Disclaimer />
    </>
  )
}
