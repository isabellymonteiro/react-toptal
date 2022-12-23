import { ReactNode } from 'react'
import './styles.css'

const AppContainer = ({ children }: { children: ReactNode}) => {
  return (
    <div className='appContainer'>
      {children}
    </div>
  )
}

export default AppContainer