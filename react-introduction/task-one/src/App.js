import { useState } from 'react'
import colors from './colors.json'
import TileCounter from './components/TileCounter'
import TileList from './components/TileList'
import { getRandomColor } from './utils/getRandomColor'

import './App.css'

export const TestId = {
  Root: 'app-root'
}

const App = () => {
  const [colorList, setColorList] = useState(colors)

  const colorListLength = colorList.length

  const handleIncrement = () => {
    const newRandomColor = getRandomColor(colorList)
    setColorList(prevState => [newRandomColor, ...prevState])
  }

  const handleDecrement = () => {
    const lastColor = colorList[colorListLength - 1]
    const newColorList = colorList.filter(colorItem => colorItem !== lastColor)
    setColorList(newColorList)
  }

  return (
    <div className='App' data-testid={TestId.Root}>
      <TileCounter
        tileCount={colorListLength}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <TileList colorList={colorList} />
    </div>
  )
}

export default App