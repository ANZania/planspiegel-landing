import { Article, performRequest } from '@/lib/datoCMS'
import { StructuredText, toNextMetadata } from 'react-datocms'

export async function generateStaticParams() {
  const articles = await performRequest<{ allArticles: Article[] }>(`
{
  allArticles {
    slug
  }
}`)
  return articles.allArticles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { site, allArticles } = await performRequest<any>(
    `
query GetArticleSEOBySlug($slug: String!) {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  allArticles(filter: {slug: {eq: $slug}}) {
    h1
    slug
    content {
      links
      value
      blocks
    }
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
    _firstPublishedAt
  }
}`,
    { variables: { slug: params.slug } },
  )

  return toNextMetadata([...site.favicon, ...allArticles[0].seo])
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const { allArticles } = await performRequest<{ allArticles: Article[] }>(
    `
query GetArticleBySlug($slug: String!) {
  allArticles(filter: { slug: { eq: $slug } }) {
    h1
    slug
    content {
      links
      value
      blocks
    }
    _createdAt
    _firstPublishedAt
  }
}`,
    { variables: { slug: params.slug } },
  )
  const article = allArticles[0]
  if (!article) {
    return <p>Article not found!</p>
  }

  return (
    <article>
      <h1>{article.h1}</h1>
      <StructuredText data={article.content} />
    </article>
  )
}
