import css from './styles.module.scss'

const Footer = (): JSX.Element => {
  return (
    <footer className={css.footer}>
      <p>
        &copy; {new Date().getFullYear()} Sadam. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
