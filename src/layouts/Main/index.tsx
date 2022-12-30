import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import css from './styles.module.scss'

type Props = {
  children: React.ReactNode
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = (props: Props): JSX.Element => {
  const title = props.meta?.title
    ? `${props.meta.title} | Sadam LAB`
    : 'Sadam LAB'
  const description = props.meta?.description || "Sadam's personal website"
  const keywords =
    props.meta?.keywords ||
    'Sadam, Software Engineer, Web Developer, Cloud, Bali, Indonesia'

  return (
    <>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <title>{title}</title>
      </Head>

      <div className={`${css.wrapper} font-rubik`}>
        <Navbar />
        <motion.main
          initial='hidden'
          animate='enter'
          exit='exit'
          variants={variants}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className={css.main}>
          {props.children}
        </motion.main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default Layout
