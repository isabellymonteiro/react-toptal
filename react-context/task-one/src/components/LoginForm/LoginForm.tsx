import { useState } from 'react'
import { useUser } from '../../contexts'

const LoginForm = () => {
  const [username, setUsername] = useState('')

  const { logIn, error } = useUser()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!username.trim()) return

    logIn(username)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label='Log in'
        />
        <button>Log in</button>
      </form>
      {error && <span>User already exists, please try another one</span>}
    </div>
  )
}

export default LoginForm