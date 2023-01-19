import Tile from '../Tile'
import './styles.css'

export const TestId = {
  Root: 'tile-list-root'
}

const TileList = ({ colorList }) => {
  return (
    <ul className='tileList' data-testid={TestId.Root}>
      {colorList.map(color => <Tile key={color} color={color} />)}
    </ul>
  )
}

export default TileList