import type { Project } from '@/types/project'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const projectsPath = path.join(process.cwd(), 'src/data/projects')

/**
 * Get projects slugs
 *
 * @returns {Promise<string[]>} - Promise that resolves with an array of project slugs
 */
export async function getSlugs(): Promise<string[]> {
  try {
    const projects = fs.readdirSync(projectsPath)
    return projects.map((s) => s.replace('.mdx', ''))
  } catch (error) {
    return []
  }
}

/**
 * Find project by slug
 *
 * @param {string} slug - Project's slug
 * @returns {Promise<Project | null>} - Promise that resolves with a Project data or null
 */
export async function findProject(slug: string): Promise<Project | null> {
  try {
    const dir = path.join(projectsPath, `${slug}.mdx`)

    const source = fs.readFileSync(dir)
    const { content, data } = matter(source)

    return {
      title: data.title,
      slug,
      featured: data.featured,
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
 * Get all projects
 *
 * @returns {Promise<Project[]>} - Promise that resolves with a Projects data
 */
export async function getProjects(): Promise<Project[]> {
  const projects = fs.readdirSync(projectsPath)

  return projects.reduce((allProjects: any, projectSlug: string) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'src/data/projects', projectSlug),
      'utf8',
    )

    const { content, data } = matter(source)

    return [
      {
        title: data.title,
        slug: projectSlug.replace('.mdx', ''),
        featured: data.featured,
        description: data.description,
        date: data.date,
        readingTime: readingTime(content),
        content,
        tags: data.tags,
      },
      ...allProjects,
    ]
  }, [])
}
