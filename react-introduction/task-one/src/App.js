import { useState } from 'react'
import colors from './colors.json'
import TileCounter from './components/TileCounter'
import TileList from './components/TileList'
import { getRandomColor } from './utils/getRandomColor'

import './App.css'

const App = () => {
  const [colorList, setColorList] = useState(colors)

  const colorListLength = colorList.length

  const increment = () => {
    const newRandomColor = getRandomColor(colorList)
    setColorList(prevState => [newRandomColor, ...prevState])
  }

  const decrement = () => {
    const lastColor = colorList[colorListLength - 1]
    const newColorList = colorList.filter(colorItem => colorItem !== lastColor)
    setColorList(newColorList)
  }

  return (
    <div className='App'>
      <TileCounter
        tileCount={colorListLength}
        handleIncrement={increment}
        handleDecrement={decrement}
      />
      <TileList colorList={colorList} />
    </div>
  )
}

export default App