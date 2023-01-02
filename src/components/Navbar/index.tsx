import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaLaptopCode, FaGithub } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import css from './styles.module.scss'

function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const [menus] = useState([
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Snippets', href: '/snippets' },
    { name: 'Download', href: '/download' },
  ])

  useEffect(() => {
    // Close mobile menu on screen resize
    window.addEventListener('resize', () => {
      setOpenMobileMenu(false)
    })

    // Close mobile menu on scroll
    window.addEventListener('scroll', () => {
      setOpenMobileMenu(false)
    })

    // Close mobile menu on click outside of it
    document.addEventListener('click', (e: any) => {
      if (!e.target.closest(`.${css.navbar}`)) {
        setOpenMobileMenu(false)
      }
    })
  }, [])

  return (
    <nav className={`${css.navbar} font-poppins`}>
      {/* Site Logo */}
      <Link href='/' className={css['site-logo']}>
        <FaLaptopCode className={css.icon} />
        Sadam
        <span>L &nbsp;A &nbsp;B</span>
      </Link>

      {/* Desktop Menu */}
      <div className={css.menu}>
        {menus.map((menu) => (
          <Link key={menu.name} href={menu.href} className={css.link}>
            {menu.name}
          </Link>
        ))}

        <a
          href='https://github.com/sadam21x/lab'
          target='_blank'
          rel='noreferrer'
          className={css['github-link']}>
          <FaGithub />
        </a>
      </div>
      {/* End of Desktop Menu */}

      {/* Mobile Menu Toggle */}
      <CgMenuRight
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
        className={css['mobile-menu-toggle']}
      />

      {/* Mobile Menu */}
      <div
        className={`${css['mobile-menu']} ${openMobileMenu ? css.active : ''}`}>
        {/* Site Logo */}
        <Link href='/' className={`${css['site-logo']} ${css.mobile}`}>
          <FaLaptopCode className={css.icon} />
          Sadam
          <span>L &nbsp;A &nbsp;B</span>
        </Link>

        {menus.map((menu) => (
          <Link key={menu.name} href={menu.href} className={css.link}>
            {menu.name}
          </Link>
        ))}

        <a
          href='https://github.com/sadam21x/lab'
          target='_blank'
          rel='noreferrer'
          className={css['mobile-github-link']}>
          <FaGithub />
          GitHub
        </a>
      </div>
      {/* End of Mobile Menu */}
    </nav>
  )
}

export default Navbar
