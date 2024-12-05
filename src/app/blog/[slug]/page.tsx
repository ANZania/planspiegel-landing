import React from 'react'
import { Article, performRequest } from '@/lib/datoCMS'
import { Container } from '@/components/Container'
import { Disclaimer } from '@/components/Disclaimer'
import { RecommendationsCarousel } from '@/components/RecommendationsCarousel'
import { toNextMetadata } from 'react-datocms'
import { renderNodeRule, StructuredText } from 'react-datocms/structured-text'
import {
  isHeading,
  isParagraph,
  isList,
  isListItem,
  isBlockquote,
  isCode,
  isLink,
} from 'datocms-structured-text-utils'
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
  const { allArticles, recommendations } = await performRequest<{
    allArticles: Article[]
    recommendations: Article[]
  }>(
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
  recommendations: allArticles(filter: { slug: { neq: $slug } }) {
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
}`,
    { variables: { slug: params.slug } },
  )
  const article = allArticles[0]
  if (!article) {
    return <p>Article not found!</p>
  }

  return (
    <>
      <Container className="mt-12 sm:mt-16 md:mt-28" as="article">
        <div className="relative">
          <span className="absolute right-0 top-0 -translate-y-full">
            {new Date(article.date).getDate()}.
            {new Date(article.date).getMonth()}.
            {new Date(article.date).getFullYear()}
          </span>
          <h1 className="mb-8 text-center text-4xl font-bold">{article.h1}</h1>
        </div>
        <div>
          <Image
            layout="responsive"
            width={16}
            height={9}
            src={article.aiGeneratedImage.url}
            alt={article.aiGeneratedImage.alt}
            className="aspect-video max-h-[50vh] rounded-lg object-cover object-top"
          />
          <StructuredText
            data={article.content}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children }) => {
                const HeadingTag =
                  `h${node.level}` as keyof JSX.IntrinsicElements
                return React.createElement(
                  HeadingTag,
                  { className: 'my-4 text-2xl font-bold' },
                  children,
                )
              }),
              renderNodeRule(isParagraph, ({ children }) => {
                return <p className="my-2 text-base">{children}</p>
              }),
              renderNodeRule(isList, ({ node, children }) => {
                const ListTag = node.style === 'numbered' ? 'ol' : 'ul'
                return React.createElement(
                  ListTag,
                  {
                    className: 'list-disc list-outside my-4 marker:font-bold',
                  },
                  children,
                )
              }),
              renderNodeRule(isListItem, ({ children }) => {
                return <li className="ml-4">{children}</li>
              }),
              renderNodeRule(isBlockquote, ({ children }) => {
                return (
                  <blockquote className="my-4 border-l-4 border-gray-400 pl-4 italic">
                    {children}
                  </blockquote>
                )
              }),
              renderNodeRule(isCode, ({ node }) => {
                return (
                  <pre className="my-4 rounded bg-gray-900 p-4 text-white">
                    <code>{node.code}</code>
                  </pre>
                )
              }),
              renderNodeRule(isLink, ({ node, children }) => {
                const isNewTab = node.meta?.some((meta) => meta.id === 'newtab')
                return (
                  <a
                    href={node.url}
                    target={isNewTab ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {children}
                  </a>
                )
              }),
            ]}
          />
        </div>
      </Container>
      <Container className="mt-12 sm:mt-16 md:mt-28">
        <RecommendationsCarousel items={recommendations} />
      </Container>
      <Disclaimer />
    </>
  )
}
