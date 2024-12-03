import { executeQuery } from '@datocms/cda-client'

// Типизация для функции
export const performRequest = async <T>(
  query: string,
  options?: Record<string, unknown>,
): Promise<T> => {
  return executeQuery(query, {
    ...options,
    token: process.env.NEXT_DATOCMS_API_TOKEN as string,
    environment: process.env.NEXT_DATOCMS_ENVIRONMENT || 'main', // Default: 'main'
  })
}
