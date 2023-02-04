import type { GetStaticProps } from 'next'
import type { Project } from '@/types/project'
import Link from 'next/link'
import { getProjects } from '@/utils/project'
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

function ProjectsPage(props: Props) {
  const meta = {
    title: 'Projects',
  }

  return (
    <MainLayout meta={meta}>
      <h1 className='font-semibold text-xl lg:text-2xl'>Projects</h1>
      <hr className='my-4' />
      <p className='text-base lg:text-lg'>Check out some of my works</p>
      
      <div className='flex flex-col flex-wrap gap-x-4 gap-y-8 mt-6 lg:flex-row'>
        {props.projects.map((project) => (
          <Link key={project.title} href={`projects/${project.slug}`} className='flex'>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </Link>
        ))}
      </div>
    </MainLayout>
  )
}

export default ProjectsPage
