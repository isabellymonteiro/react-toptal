// based on https://codepen.io/irfanezani_/pen/mdeLpKo
import { useState } from 'react'
import Light from './components/Light'
import './App.css'

const lightValues = [
  { id: 1, color: 'red' },
  { id: 2, color: 'yellow' },
  { id: 3, color: 'blue' },
  { id: 4, color: 'green' },
  { id: 5, color: 'red' },
  { id: 6, color: 'yellow' },
  { id: 7, color: 'blue' },
  { id: 8, color: 'green' }
]

function App() {
  const [isOn, setIsOn] = useState(true)
  
  const toggleLight = () => {
    setIsOn(prevState => !prevState)
  }

  // the key could be index if id wasn't available in this case
  // this would not be a problem since the order of the lights is always the same
  // and I'm not sorting or doing something else with the array to cause index/key problems
  const lights = lightValues.map(({ id, color }) => <Light key={id} color={color} isOn={isOn} />)
  
  return (
    <main>
      <div className='lights'>
        {lights}
      </div>
      <button className='toggle-lights-button' onClick={toggleLight}>
        Turn {isOn ? 'off' : 'on'}
      </button>
    </main>
  )
}

export default App