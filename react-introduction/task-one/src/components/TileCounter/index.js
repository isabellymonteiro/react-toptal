import ControlButton from '../ControlButton'
import './styles.css'

const TileCounter = ({ tileCount, handleIncrement, handleDecrement }) => {
  return (
    <div className='tileCounter'>
      <ControlButton 
        disabled={tileCount === 0} 
        handleOnClick={handleDecrement}
      >
        -
      </ControlButton>
      <span>{tileCount}</span>
      <ControlButton 
        disabled={tileCount === 9}
        handleOnClick={handleIncrement}
      >
        +
      </ControlButton>
    </div>
  )
}

export default TileCounter