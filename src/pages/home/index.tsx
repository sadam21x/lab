import type { NextPage } from 'next'
import Image from 'next/image'
import { FaGithubAlt, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import Layout from '@/layouts/Main'
import images from '@/assets/images'
import projects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import css from './styles.module.scss'

const HomePage: NextPage = () => {
  const contacts = [
    {
      title: 'Email',
      icon: <MdAlternateEmail className={css.icon} />,
      link: 'mailto:sadam21x@gmail.com',
    },
    {
      title: 'LinkedIn',
      icon: <FaLinkedin className={css.icon} />,
      link: 'https://www.linkedin.com/in/sadam21x',
    },
    {
      title: 'GitHub',
      icon: <FaGithubAlt className={css.icon} />,
      link: 'https://github.com/sadam21x',
    },
    {
      title: 'Telegram',
      icon: <FaTelegram className={css.icon} />,
      link: 'https://t.me/sadam21x',
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <Layout>
      <div
        className={`${css.header} bg-gray-200`}
        style={{ backgroundImage: `url('https://source.unsplash.com/random/1000x400/?programming')` }}
      >
        {/* Avatar */}
        <div className={`${css.avatar} bg-sky-800`}>
          <Image src={images.avatar} alt='avatar' className={css.image} />
        </div>

        {/* Name & title */}
        <div className={css.identity}>
          <h1 className={css.name}>Sadam</h1>
          <h1 className={`${css.title} text-sky-800`}>Web Developer</h1>
        </div>

        {/* Contacts */}
        <div className={css.contacts}>
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.link}
              target='_blank'
              rel='noreferrer'
              className={`${css.contact} tooltip`}
              data-tip={contact.title}
            >
              {contact.icon}
            </a>
          ))}
        </div>

      </div>
      
      {/* Introduction */}
      <div className={`${css.introduction} font-poppins`}>
        <p>
          Hi, I&apos;m Sadam, a guy who loves coding and coffee.
          Welcome to my &quot;LAB&quot;, an online space to share my knowledge and experience,
          especially in IT/programming.
        </p>

        <p>
          I started my coding journey when I was 14 y.o.
          At that time, I wrote my first HTML code on Blogspot from my old Nokia 5130 XpressMusic.
          Since then, I fell in love with programming and started to learn more about it.
        </p>

        <p>
          I got my first laptop when I was 15 y.o., and it boosted my passion even more.
          My first &quot;<strong>real</strong>&quot; programming language was <strong>PASCAL</strong>.
          I learned it when I was in senior high school, I joined a programming extracurricular class,
          and I&quot;ve participated in some regional programming competitions here in Bali,
          even though I didn&apos;t win any of them :D
        </p>

        <p>
          I started my professional journey in 2020,
          it was my first time working on real-world projects from my college, it was a web-based certificate management system.
          Since then, I&apos;ve been working on several projects, mostly from my college.
        </p>

        <p>
          In early 2022, I graduated from Universitas Airlangga with an Associate Degree in Information System and landed my first job several months later.
        </p>

        <p>
          It&apos;s been 9 years since I started my coding journey,
          and I chose web development as my career path, but I&apos;m always open to learning new things.
          I currently enjoy working and playing around with modern and trendy <strong>React</strong>,
          old fashion yet powerful <strong>PHP/Laravel</strong>,
          cutting-edge <strong>Go</strong>, <strong>Node.js</strong>, <strong>Docker</strong>, etc.
        </p>
      </div>

      {/* Featured Projects */}
      <div className={css.projects}>
        <h1 className={css.title}>
          Featured Projects
        </h1>
        
        <div className={css.container}>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              type={project.type}
              thumbnail={project.thumbnail}
              org={project.org}
              technologies={project.technologies}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
