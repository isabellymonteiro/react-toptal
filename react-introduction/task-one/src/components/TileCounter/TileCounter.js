import ControlButton from '../ControlButton'
import './styles.css'

const TileCounter = ({ tileCount, onIncrement, onDecrement }) => {
  return (
    <div className='tileCounter'>
      <ControlButton 
        disabled={tileCount === 0} 
        onClick={onDecrement}
      >
        -
      </ControlButton>
      <span>{tileCount}</span>
      <ControlButton 
        disabled={tileCount === 9}
        onClick={onIncrement}
      >
        +
      </ControlButton>
    </div>
  )
}

export default TileCounter