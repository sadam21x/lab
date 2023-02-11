import type { GetStaticProps } from 'next'
import type { Project } from '@/types/project'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithubAlt, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { getProjects } from '@/utils/project'
import images from '@/assets/images'
import MainLayout from '@/layouts/Main'
import ProjectCard from '@/components/ProjectCard'

type Props = {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjects()
  projects.sort((a: any, b: any) => (a.date > b.date ? -1 : 1))

  return {
    props: {
      projects,
    },
  }
}

function HomePage(props: Props) {
  const contacts = [
    {
      title: 'Email',
      icon: <MdAlternateEmail className='w-auto h-6 lg:h-8' />,
      link: 'mailto:sadam21x@gmail.com',
    },
    {
      title: 'LinkedIn',
      icon: <FaLinkedin className='w-auto h-6 lg:h-8' />,
      link: 'https://www.linkedin.com/in/sadam21x',
    },
    {
      title: 'GitHub',
      icon: <FaGithubAlt className='w-auto h-6 lg:h-8' />,
      link: 'https://github.com/sadam21x',
    },
    {
      title: 'Telegram',
      icon: <FaTelegram className='w-auto h-6 lg:h-8' />,
      link: 'https://t.me/sadam21x',
    },
  ]

  const featuredProjects = props.projects.filter((project) => project.featured)

  return (
    <MainLayout>
      {/* Header Background */}
      <div
        className='w-full h-36 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-lg lg:h-52'
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/1000x400/?technology')`,
        }}></div>

      <div className='relative z-[2] flex flex-col items-center -mt-16 px-4 lg:flex-row lg:-mt-24 lg:px-12'>
        {/* Avatar */}
        <div className='w-28 h-28 rounded-full bg-sky-800 border-2 border-white lg:w-48 lg:h-48'>
          <Image
            src={images.avatar}
            alt='avatar'
            className='w-full h-full rounded-full object-contain'
          />
        </div>

        {/* Name & Title */}
        <div className='font-semibold text-center mt-4 lg:text-left lg:ml-4 lg:mt-20'>
          <p className='text-2xl'>Sadam</p>
          <p className='text-lg text-blue-800'>Software Engineer</p>
        </div>

        {/* Contacts */}
        <div className='flex items-center gap-4 mt-4 lg:ml-auto lg:mt-20'>
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.link}
              target='_blank'
              rel='noreferrer'
              className='tooltip'
              data-tip={contact.title}>
              {contact.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <div className='flex flex-col gap-4 font-poppins text-sm text-justify mt-12 lg:text-base lg:text-left'>
        <h6 className='font-semibold text-xl'>Who am I?</h6>
        <p>
          Hi, I&apos;m Sadam, a guy who loves coding and coffee. Welcome to my
          &quot;LAB&quot;, an online space to share my knowledge and experience,
          especially in IT/programming.
        </p>

        <h6 className='font-semibold text-xl'>My background</h6>
        <p>
          I started my coding journey when I was 14 y.o. At that time, I wrote
          my first HTML code on Blogspot from my old Nokia 5130 XpressMusic.
          Since then, I fell in love with programming and started to learn more
          about it.
        </p>

        <p>
          I got my first laptop when I was 15 y.o., and it boosted my passion
          even more. My first &quot;<strong>real</strong>&quot; programming
          language was <strong>PASCAL</strong>. I learned it when I was in
          senior high school, I joined a programming extracurricular class, and
          I&quot;ve participated in some regional programming competitions here
          in Bali, even though I didn&apos;t win any of them :D
        </p>

        <p>
          I started my professional journey in 2020, it was my first time
          working on real-world projects from my college, it was a web-based
          certificate management system. Since then, I&apos;ve been working on
          several projects, mostly from my college.
        </p>

        <p>
          In early 2022, I graduated from Universitas Airlangga with an
          Associate Degree in Information System and landed my first job several
          months later.
        </p>

        <h6 className='font-semibold text-xl'>What&apos;s next?</h6>
        <p>
          It&apos;s been 9 years since I started my coding journey, and I chose
          web development as my career path, but I&apos;m always open to
          learning new things. I currently enjoy working and playing around with
          modern and trendy <strong>React</strong>, old fashion yet powerful{' '}
          <strong>PHP/Laravel</strong>, cutting-edge <strong>Go</strong>,{' '}
          <strong>Node.js</strong>, <strong>Docker</strong>, etc.
        </p>
      </div>

      {/* Featured Projects */}
      <div className='mt-16'>
        <h1 className='font-semibold text-lg lg:text-2xl'>Featured Projects</h1>

        <div className='flex flex-wrap gap-6 mt-8'>
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={`projects/${project.slug}`}
              className='flex'>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage
