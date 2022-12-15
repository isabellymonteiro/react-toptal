import './styles.css'

const Light = ({ color, isOn }) => {
  return (
    <div className={`circle ${isOn ? color : ''}`}></div>
  )
}

export default Light