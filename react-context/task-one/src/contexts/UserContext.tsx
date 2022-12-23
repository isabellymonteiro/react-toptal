import { createContext, ReactNode, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { User } from '../interfaces'
import { users as appUsers } from '../data'

interface UserData extends User {
  isLoggedIn: boolean
}

interface UserContextProps {
  user: UserData
  logIn: (name: string) => void
  logOut: () => void
  error: boolean
}

const UserContext = createContext<UserContextProps | null>(null)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState('')
  const [error, setError] = useState(false)
  const [users, setUsers] = useState(appUsers.map(user => user.username))

  const isLoggedIn = !!username

  const logIn = (name: string) => {
    const lowercaseName = name.toLocaleLowerCase()

    if (users.includes(lowercaseName)) {
      setError(true)
      return
    }

    setUsers(prevState => [...prevState, lowercaseName])
    setUserId(uuidv4())
    setUsername(lowercaseName)
  }

  const logOut = () => {
    setUserId('')
    setUsername('')
  }

  const userData = { username: username, id: userId, isLoggedIn }

  return (
    <UserContext.Provider value={{ user: userData, logIn, logOut, error }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within an UserProvider')
  }

  return context
}