import type { ReadTimeResults } from 'reading-time'

export type Snippet = {
  title: string
  slug: string
  description: string
  date: string
  readingTime: ReadTimeResults
  content: string
  tags: {
    name: string
    color: string
  }[]
}
