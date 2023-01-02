import Image from 'next/image'
import css from './styles.module.scss'

type Props = {
  title: string
  type: string
  thumbnail: any
  org: string
  technologies: {
    name: string
    logo: any
  }[]
  description: string
}

function ProjectCard(props: Props) {
  return (
    <div className={`${css.card} bg-base-100 shadow-xl`}>
      <div className={css.thumbnail}>
        <Image src={props.thumbnail} alt={props.title} className={css.image} />
        <div className={`${css.type} shadow-sm`}>{props.type}</div>
      </div>

      <div className={css.body}>
        <h1 className={css.title}>{props.title}</h1>
        <div className={css.technologies}>
          {props.technologies.map((tech) => (
            <div key={tech.name} className='tooltip' data-tip={tech.name}>
              <Image src={tech.logo} alt={tech.name} className={css.logo} />
            </div>
          ))}
        </div>

        <p className={css.description}>{props.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
