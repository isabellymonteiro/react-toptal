import { ReactNode } from 'react'
import styles from './AppContainer.module.css'

const AppContainer = ({ children }: { children: ReactNode}) => {
  return (
    <div className={styles.appContainer}>
      {children}
    </div>
  )
}

export default AppContainer