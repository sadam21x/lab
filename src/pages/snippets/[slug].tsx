import type { GetStaticPaths, GetStaticProps } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { Snippet } from '@/types/snippet'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import { getSlugs, findSnippet } from '@/utils/snippet'
import PostLayout from '@/layouts/Post'

import 'highlight.js/styles/github-dark.css'

type Params = {
  slug: string
}

type Props = {
  snippet: Snippet
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
    const snippet = await findSnippet(params.slug)

    if (!snippet) {
      return {
        notFound: true,
      }
    }

    const source = await serialize(snippet.content, {
      mdxOptions: {
        rehypePlugins: [rehypeSlug, rehypeHighlight],
      },
    })

    return {
      props: {
        snippet,
        source,
      },
    }
  } else {
    return { notFound: true }
  }
}

function SnippetPage(props: Props) {
  return (
    <PostLayout title={props.snippet.title}>
      <MDXRemote {...props.source} />
    </PostLayout>
  )
}

export default SnippetPage
