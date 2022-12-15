import './styles.css'

const Light = ({ color, isOn }) => {

  const onStyle = isOn ? color : ''

  return (
    <div className={`circle ${onStyle}`} />
  )
}

export default Light