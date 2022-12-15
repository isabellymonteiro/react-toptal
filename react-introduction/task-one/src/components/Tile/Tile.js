import { useState } from 'react'
import './styles.css'

const Tile = ({ color }) => {
  const [showColor, setShowColor] = useState(false)

  const handleShowColor = () => {
    setShowColor(prevState => !prevState)
  }

  return (
    <li
      className='tile'
      style={{ backgroundColor: color }} 
      onClick={handleShowColor}
    >
      {showColor && color}
    </li>
  )
}

export default Tile