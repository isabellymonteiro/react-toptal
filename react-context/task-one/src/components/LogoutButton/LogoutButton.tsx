import { useUser } from "../../contexts"
import './styles.css'

const LogoutButton = () => {
  const { logOut } = useUser()

  return (
    <button className='logoutButton' onClick={logOut}>
      Log out
    </button>
  )
}

export default LogoutButton