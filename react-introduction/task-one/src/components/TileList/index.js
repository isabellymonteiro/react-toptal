import Tile from '../Tile'
import './styles.css'

const TileList = ({ colorList }) => {
  return (
    <ul className='tileList'>
      {colorList.map(color => <Tile key={color} color={color} />)}
    </ul>
  )
}

export default TileList