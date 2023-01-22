import './styles.css'

const Loader = ({ width }) => {
  return (
    <img 
      className='loaderImage' 
      style={{ maxWidth: width }} 
      src='/images/hourglass.svg' alt='Loading' 
    />
  )
}

export default Loader