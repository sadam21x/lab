import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaLaptopCode, FaGithub } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import css from './styles.module.scss'

function SiteLogo() {
  return (
    <Link
      href='/'
      className='flex items-center gap-2 text-lg font-semibold lg:gap-4 lg:text-xl'>
      <FaLaptopCode className='text-2xl lg:text-3xl' />
      Sadam
      <span className='relative bottom-1 flex justify-center items-center text-xs lg:right-2'>
        LAB
      </span>
    </Link>
  )
}

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
    <nav
      className={`${css.navbar} flex justify-between items-center font-poppins px-6 py-4 lg:px-32 lg:py-6`}>
      {/* Site Logo */}
      {SiteLogo()}

      {/* Desktop Menu */}
      <div className='hidden items-center gap-x-8 lg:flex'>
        {menus.map((menu) => (
          <Link key={menu.name} href={menu.href} className={css.link}>
            {menu.name}
          </Link>
        ))}

        <a
          href='https://github.com/sadam21x/lab'
          target='_blank'
          rel='noreferrer'
          className='text-3xl'>
          <FaGithub />
        </a>
      </div>
      {/* End of Desktop Menu */}

      {/* Mobile Menu Toggle */}
      <CgMenuRight
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
        className='text-3xl cursor-pointer lg:hidden'
      />

      {/* Mobile Menu */}
      <div
        className={`${css['mobile-menu']} ${openMobileMenu ? css.active : ''}`}>
        {/* Site Logo */}
        {SiteLogo()}

        {menus.map((menu) => (
          <Link key={menu.name} href={menu.href} className={css.link}>
            {menu.name}
          </Link>
        ))}

        <a
          href='https://github.com/sadam21x/lab'
          target='_blank'
          rel='noreferrer'
          className='w-max flex justify-center items-center gap-2 bg-black text-white text-base px-4 py-1 rounded-full'>
          <FaGithub />
          GitHub
        </a>
      </div>
      {/* End of Mobile Menu */}
    </nav>
  )
}

export default Navbar
