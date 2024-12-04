import { executeQuery } from '@datocms/cda-client'

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
  content: {
    links: any[]
    value: any
    blocks: any[]
  }
  _createdAt: string
  _firstPublishedAt: string
}
