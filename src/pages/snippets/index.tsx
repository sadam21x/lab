import type { GetStaticProps } from 'next'
import type { Snippet } from '@/types/snippet'
import Link from 'next/link'
import { getSnippets } from '@/utils/snippet'
import Layout from '@/layouts/Main'
import css from './styles.module.scss'

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
    <Layout meta={meta}>
      <h1 className={css.title}>Snippets</h1>
      <hr className={css.divider} />

      <div className={css.container}>
        {props.snippets.map((snippet: any) => (
          <Link
            key={snippet.title}
            href={`snippets/${snippet.slug}`}
            className={css.card}>
            <h1 className={css['card-title']}>{snippet.title}</h1>

            <p className={css['card-description']}>{snippet.description}</p>

            <div className={css['card-tags']}>
              {snippet.tags.map((tag: any) => (
                <div key={tag.name} className={css.tag}>
                  <span
                    className={css.circle}
                    style={{
                      backgroundColor: tag.color,
                    }}
                  />
                  <span className={css.name}>{tag.name}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default SnippetsPage
