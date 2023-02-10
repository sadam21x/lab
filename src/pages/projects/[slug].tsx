import type { GetStaticPaths, GetStaticProps } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { Project } from '@/types/project'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import { getSlugs, findProject } from '@/utils/project'
import PostLayout from '@/layouts/Post'

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
        rehypePlugins: [rehypeSlug, rehypeHighlight],
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
    <PostLayout title={props.project.title}>
      <MDXRemote {...props.source} />
    </PostLayout>
  )
}

export default ProjectPage
