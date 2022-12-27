import { useUser } from "../../contexts"
import styles from './LogoutButton.module.css'

const LogoutButton = () => {
  const { logOut } = useUser()

  return (
    <button className={styles.logoutButton} onClick={logOut}>
      Log out
    </button>
  )
}

export default LogoutButton