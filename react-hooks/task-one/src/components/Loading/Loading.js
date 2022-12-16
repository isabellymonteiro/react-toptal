import './styles.css'

const Loading = ({ width }) => {
  return (
    <img 
      className='loadingImage' 
      style={{ maxWidth: width }} 
      src='/images/hourglass.svg' alt='Loading' 
    />
  )
}

export default Loading