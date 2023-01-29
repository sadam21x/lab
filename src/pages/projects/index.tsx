import projects from '@/data/projects'
import MainLayout from '@/layouts/Main'
import ProjectCard from '@/components/ProjectCard'

function ProjectsPage() {
  const meta = {
    title: 'Projects',
  }

  return (
    <MainLayout meta={meta}>
      <h1 className='font-semibold text-xl lg:text-2xl'>Projects</h1>

      <hr className='my-4' />

      <p className='text-base lg:text-lg'>Check out some of my works</p>

      <div className='flex flex-col flex-wrap gap-x-4 gap-y-8 mt-6 lg:flex-row'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </MainLayout>
  )
}

export default ProjectsPage
