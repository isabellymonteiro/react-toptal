import { useState } from 'react'
import './styles.css'

const CityForm = () => {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input 
        type='text' 
        value={city} 
        placeholder='Enter your city'
        onChange={(e) => setCity(e.target.value)} 
      />
      <button disabled={city.trim() === ''}>Send</button>
    </form>
  )
}

export default CityForm