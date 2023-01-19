import { useState } from 'react'
import './styles.css'

export const TestId = {
  Root: 'tile-root'
}

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
      data-testid={TestId.Root}
    >
      {showColor && color}
    </li>
  )
}

export default Tile