import { useRef } from "react"

const UncontrolledForm = () => {
  const inputNameRef = useRef<HTMLInputElement | null>(null)
  const selectCountryRef = useRef<HTMLSelectElement | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    alert(`
      Name: ${inputNameRef?.current?.value}
      Country: ${selectCountryRef?.current?.value}
    `)
  }

  return (
    <form className="flex-column small-gap" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name-input">Name: </label>
        <input id="name-input" defaultValue="Marta Silva" type="text" ref={inputNameRef} />
      </div>
      <div>
        <label htmlFor="country-select">Country: </label>
        <select id="country-select" ref={selectCountryRef}>
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

export default UncontrolledForm