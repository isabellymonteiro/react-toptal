import Picasso from '@toptal/picasso-provider'
import TaskOne from './Tasks/TaskOne'
import TasksTwoThree from './Tasks/TasksTwoThree'

import './App.css'

// use node version 16 with `nvm use 16` before `npm start`

function App() {
  return (
    <Picasso>
      {/* <TaskOne /> */}
      <TasksTwoThree />
    </Picasso>
  )
}

export default App
