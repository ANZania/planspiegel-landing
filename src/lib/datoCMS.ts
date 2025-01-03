import { executeQuery } from '@datocms/cda-client'
import { SeoTag } from 'react-datocms'
import { StructuredTextGraphQlResponse } from 'react-datocms/structured-text'

export const performRequest = async <T>(
  query: string,
  options?: Record<string, unknown>,
): Promise<T> => {
  return executeQuery(query, {
    ...options,
    token: process.env.NEXT_DATOCMS_API_TOKEN as string,
    environment: process.env.NEXT_DATOCMS_ENVIRONMENT || 'main',
  })
}

export type Article = {
  h1: string
  slug: string
  content: StructuredTextGraphQlResponse
  date: string
  aiGeneratedImage: {
    url: string
    alt: string
  }
  seo: SeoTag[]
}
