import './styles.css'

export const TestId = {
  Root: 'control-button-root'
}

const ControlButton = ({ children, onClick, disabled }) => {
  return (
    <button
      className='controlButton'
      disabled={disabled} 
      onClick={onClick}
      data-testid={TestId.Root}
    >
      {children}
    </button>
  )
}

export default ControlButton