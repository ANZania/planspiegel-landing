import { Container } from '@/components/Container'
import { Disclaimer } from '@/components/Disclaimer'
import { Article, performRequest } from '@/lib/datoCMS'
import { toNextMetadata } from 'react-datocms'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'

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
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
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
    aiGeneratedImage {
      url
      alt
    }
    date: _firstPublishedAt
  }
}`,
    { variables: { slug: params.slug } },
  )
  const article = allArticles[0]
  if (!article) {
    return <p>Article not found!</p>
  }

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56" as="article">
        <h1 className="mb-8 text-center text-4xl font-bold">{article.h1}</h1>
        <span>{article.date}</span>
        <Image
          width={100}
          height={100}
          src={article.aiGeneratedImage.url}
          alt={article.aiGeneratedImage.alt}
        />
        <StructuredText data={article.content} />
      </Container>
      <Disclaimer />
    </>
  )
}
