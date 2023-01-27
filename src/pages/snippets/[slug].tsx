import type { GetStaticPaths, GetStaticProps } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { Snippet } from '@/types/snippet'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import { getSlugs, findSnippet } from '@/utils/snippet'
import SnippetLayout from '@/layouts/Snippet'

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
    <SnippetLayout snippet={props.snippet}>
      <MDXRemote {...props.source} />
    </SnippetLayout>
  )
}

export default SnippetPage
