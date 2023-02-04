import type { Project } from '@/types/project'
import MainLayout from '@/layouts/Main'

type Props = {
  project: Project
  children: React.ReactNode
}

const ProjectLayout = (props: Props): JSX.Element => {
  const meta = {
    title: props.project.title,
  }

  return (
    <MainLayout meta={meta}>
      <h1 className='font-bold text-xl lg:text-2xl'>{props.project.title}</h1>
      <hr className='mt-4 mb-8' />

      <article>{props.children}</article>
    </MainLayout>
  )
}

export default ProjectLayout
