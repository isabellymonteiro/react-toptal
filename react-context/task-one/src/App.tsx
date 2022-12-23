import AppContainer from './components/AppContainer'
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'
import LoginForm from './components/LoginForm'
import LogoutButton from './components/LogoutButton'
import { useUser } from './contexts'
import { CommentsProvider } from './contexts/CommentsContext'

import './variables.css'

function App() {
  const { user: { isLoggedIn } } = useUser()

  return (
    <AppContainer>
      <CommentsProvider>
        {isLoggedIn && <LogoutButton />}
        {!isLoggedIn && <LoginForm />}
        {isLoggedIn && <CommentForm />}
        <CommentList />
      </CommentsProvider>
    </AppContainer>
  )
}

export default App
