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
    <section>
      <h1>Blog</h1>
      <ul>
        {allArticles.map((article) => (
          <li key={article.slug}>
            <a href={`/blog/${article.slug}`}>
              <h2>{article.h1}</h2>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
