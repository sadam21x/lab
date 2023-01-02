import type { Snippet } from '@/types/snippet'
import MainLayout from '@/layouts/Main'
import css from './styles.module.scss'

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
      <h1 className={css.title}>{props.snippet.title}</h1>
      <hr className={css.divider} />

      <article className={css.content}>{props.children}</article>
    </MainLayout>
  )
}

export default SnippetLayout
