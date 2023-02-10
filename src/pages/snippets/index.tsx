import type { GetStaticProps } from 'next'
import type { Snippet } from '@/types/snippet'
import Link from 'next/link'
import { getSnippets } from '@/utils/snippet'
import MainLayout from '@/layouts/Main'
import ProjectCard from '@/components/ProjectCard'

type Props = {
  snippets: Snippet[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const snippets = await getSnippets()
  snippets.sort((a: any, b: any) => (a.date > b.date ? -1 : 1))

  return {
    props: {
      snippets,
    },
  }
}

function SnippetsPage(props: Props) {
  const meta = {
    title: 'Snippets',
  }

  return (
    <MainLayout meta={meta}>
      <h1 className='font-semibold text-xl lg:text-2xl'>Snippets</h1>

      <hr className='my-4' />

      <div className='flex flex-col flex-wrap gap-x-4 gap-y-8 mt-6 lg:flex-row'>
        {props.snippets.map((snippet: any) => (
          <Link
            key={snippet.title}
            href={`snippets/${snippet.slug}`}
            className='flex'>
            <ProjectCard
              title={snippet.title}
              description={snippet.description}
              tags={snippet.tags}
            />
          </Link>
        ))}
      </div>
    </MainLayout>
  )
}

export default SnippetsPage
