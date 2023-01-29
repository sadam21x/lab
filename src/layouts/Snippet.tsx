import type { Snippet } from '@/types/snippet'
import MainLayout from '@/layouts/Main'

type Props = {
  snippet: Snippet
  children: React.ReactNode
}

const SnippetLayout = (props: Props): JSX.Element => {
  const meta = {
    title: props.snippet.title,
  }

  return (
    <MainLayout meta={meta}>
      <h1 className='font-bold text-xl lg:text-2xl'>{props.snippet.title}</h1>
      <hr className='mt-4 mb-8' />

      <article>{props.children}</article>
    </MainLayout>
  )
}

export default SnippetLayout
