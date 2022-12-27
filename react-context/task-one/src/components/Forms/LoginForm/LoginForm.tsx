import { useState } from 'react'
import { useUser } from '../../../contexts'
import styles from '../Form.module.css'

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username'
          aria-label='username'
        />
        <button className={styles.formButton}>Log in</button>
      </form>
      {error && <span className={styles.formError}>User already exists, please try another one</span>}
    </>
  )
}

export default LoginForm