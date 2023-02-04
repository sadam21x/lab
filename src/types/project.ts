import type { ReadTimeResults } from 'reading-time'

export type Project = {
  title: string
  slug: string
  featured: boolean
  description: string
  date: string
  readingTime: ReadTimeResults
  content: string
  tags: {
    name: string
    color: string
  }[]
}
