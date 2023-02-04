import type { GetStaticPaths, GetStaticProps } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { Project } from '@/types/project'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import { getSlugs, findProject } from '@/utils/project'
import ProjectLayout from '@/layouts/Project'

import 'highlight.js/styles/github-dark.css'

type Params = {
  slug: string
}

type Props = {
  project: Project
  source: MDXRemoteSerializeResult
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs()
  const paths = slugs.map((slug: string) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (params) {
    const project = await findProject(params.slug)

    if (!project) {
      return {
        notFound: true,
      }
    }

    const source = await serialize(project.content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                ariaHidden: true,
                className: ['anchor'],
                tabIndex: -1,
              },
              behaviour: 'wrap',
            },
          ],
          rehypeHighlight,
        ],
      },
    })

    return {
      props: {
        project,
        source,
      },
    }
  } else {
    return { notFound: true }
  }
}

function ProjectPage(props: Props) {
  return (
    <ProjectLayout project={props.project}>
      <MDXRemote {...props.source} />
    </ProjectLayout>
  )
}

export default ProjectPage
