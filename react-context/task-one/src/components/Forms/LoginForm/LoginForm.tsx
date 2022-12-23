import { useState } from 'react'
import { useUser } from '../../../contexts'
import '../styles.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')

  const { logIn, error } = useUser()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!username.trim()) return

    logIn(username)
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='form__input'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username'
          aria-label='username'
        />
        <button className='form__button'>Log in</button>
      </form>
      {error && <span className='form__error'>User already exists, please try another one</span>}
    </>
  )
}

export default LoginForm