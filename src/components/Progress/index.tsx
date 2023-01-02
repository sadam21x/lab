type Props = {
  loading: boolean
}

function Progress(props: Props) {
  return (
    <progress
      className={`${
        props.loading ? 'visible' : 'invisible'
      } block progress w-screen`}
    />
  )
}

export default Progress
