import { useState } from 'react'
import './styles.css'

const CityForm = ({ handleSubmit }) => {
  const [city, setCity] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e, city)} className='cityForm'>
      <input 
        type='text' 
        value={city} 
        placeholder='Enter your city'
        onChange={(e) => setCity(e.target.value)}
        className='cityForm__input'
      />
      <button disabled={city.trim() === ''} className='cityForm__button'>Send</button>
    </form>
  )
}

export default CityForm