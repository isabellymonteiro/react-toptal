import { useUser } from "../../contexts"

const LogoutButton = () => {
  const { logOut } = useUser()

  return (
    <button onClick={logOut}>
      Log out
    </button>
  )
}

export default LogoutButton