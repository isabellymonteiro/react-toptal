import ControlButton from '../ControlButton'
import './styles.css'

export const TestId = {
  Root: 'tile-counter-root',
  Count: 'tile-counter-count'
}

const TileCounter = ({ tileCount, onIncrement, onDecrement }) => {
  return (
    <div className='tileCounter' data-testid={TestId.Root}>
      <ControlButton 
        disabled={tileCount === 0} 
        onClick={onDecrement}
      >
        -
      </ControlButton>
      <span data-testid={TestId.Count}>{tileCount}</span>
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