import './styles.css'

const ControlButton = ({ children, handleOnClick, disabled }) => {
  return (
    <button
    className='controlButton'
      disabled={disabled} 
      onClick={handleOnClick}
    >
      {children}
    </button>
  )
}

export default ControlButton