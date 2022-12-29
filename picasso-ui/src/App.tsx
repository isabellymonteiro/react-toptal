import Picasso from '@toptal/picasso-provider'
import TaskOne from './TaskOne'

import './App.css'

// use node version 16 with `nvm use 16` before `npm start`

function App() {

  return (
    <Picasso>
      <TaskOne />
    </Picasso>
  )
}

export default App
