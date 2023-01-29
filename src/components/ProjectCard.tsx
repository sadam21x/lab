type Props = {
  title: string
  description: string
  tags: {
    name: string
    color: string
  }[]
}

function ProjectCard(props: Props) {
  return (
    <div className='w-full min-h-16 flex flex-col bg-white rounded-md shadow-sm border-b-4 border-b-transparent cursor-pointer p-6 lg:w-[22rem] lg:p-4 hover:border-b-blue-500'>
      <h1 className='font-semibold text-base'>{props.title}</h1>

      <p className='text-base mt-4 lg:mt-3'>{props.description}</p>

      <div className='flex flex-wrap justify-self-end gap-4 mt-6'>
        {props.tags.map((tag) => (
          <div key={tag.name} className='flex items-center gap-x-2'>
            <span
              className='w-3 h-3 rounded-full'
              style={{
                backgroundColor: tag.color,
              }}
            />

            <span className='text-sm'>{tag.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
