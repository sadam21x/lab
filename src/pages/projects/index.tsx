import type { NextPage } from 'next'
import Layout from '@/layouts/Main'
import projects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import css from './styles.module.scss'

const ProjectsPage: NextPage = () => {
  const meta = {
    title: 'Projects',
  }

  return (
    <Layout meta={meta}>
      <h1 className={css.title}>Projects</h1>
      <hr className={css.divider} />
      <p className={css.intro}>Here are some projects I&apos;ve worked on</p>

      <div className={css.container}>
        {projects.map((project) => (
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
    </Layout>
  )
}

export default ProjectsPage
