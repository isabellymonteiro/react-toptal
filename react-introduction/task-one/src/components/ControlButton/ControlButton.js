import './styles.css'

const ControlButton = ({ children, onClick, disabled }) => {
  return (
    <button
      className='controlButton'
      disabled={disabled} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ControlButton