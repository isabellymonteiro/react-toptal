import { useState } from "react"

const ControlledForm = () => {
  const [nameInput, setNameInput] = useState('Marta Silva')
  const [selectedCountry, setSelectedCountry] = useState('brazil')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    alert(`
      Name: ${nameInput}
      Country: ${selectedCountry}
    `)
  }

  return (
    <form className="flex-column small-gap" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name-input">Name: </label>
        <input 
          id="name-input"
          value={nameInput}
          type="text"
          onChange={(e) => setNameInput(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country-select">Country: </label>
        <select 
          id="country-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="brazil">Brazil</option>
          <option value="romania">Romania</option>
          <option value="spain">Spain</option>
          <option value="turkey">Turkey</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default ControlledForm