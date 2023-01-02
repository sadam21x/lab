import type { Snippet } from '@/types/snippet'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const snippetsPath = path.join(process.cwd(), 'src/data/snippets')

/**
 * Get snippets slugs
 *
 * @returns {Promise<string[]>} - Promise that resolves with an array of snippet slugs
 */
export async function getSlugs(): Promise<string[]> {
  try {
    const snippets = fs.readdirSync(snippetsPath)
    return snippets.map((s) => s.replace('.mdx', ''))
  } catch (error) {
    return []
  }
}

/**
 * Find snippet by slug
 *
 * @param {string} slug - Snippet's slug
 * @returns {Promise<Snippet | null>} - Promise that resolves with a Snippet data or null
 */
export async function findSnippet(slug: string): Promise<Snippet | null> {
  try {
    const dir = path.join(snippetsPath, `${slug}.mdx`)

    const source = fs.readFileSync(dir)
    const { content, data } = matter(source)

    return {
      title: data.title,
      slug,
      description: data.description,
      date: data.date,
      readingTime: readingTime(content),
      content,
      tags: data.tags,
    }
  } catch (error) {
    return null
  }
}

/**
 * Get all snippets
 * 
 * @returns {Promise<Snippet[]>} - Promise that resolves with a Snippets data
 */
export async function getSnippets(): Promise<Snippet[]> {
  const snippets = fs.readdirSync(snippetsPath)

  return snippets.reduce((allSnippets: any, snippetSlug: string) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'src/data/snippets', snippetSlug),
      'utf8',
    )

    const { content, data } = matter(source)

    return [
      {
        title: data.title,
        slug: snippetSlug.replace('.mdx', ''),
        description: data.description,
        date: data.date,
        readingTime: readingTime(content),
        content,
        tags: data.tags,
      },
      ...allSnippets,
    ]
  }, [])
}
