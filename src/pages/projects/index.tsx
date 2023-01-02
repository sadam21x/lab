import projects from '@/data/projects'
import MainLayout from '@/layouts/Main'
import ProjectCard from '@/components/ProjectCard'
import css from './styles.module.scss'

function ProjectsPage() {
  const meta = {
    title: 'Projects',
  }

  return (
    <MainLayout meta={meta}>
      <h1 className={css.title}>Projects</h1>
      <hr className={css.divider} />
      <p className={css.intro}>Check out some of my works</p>

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
    </MainLayout>
  )
}

export default ProjectsPage
