import { useState } from 'react'
import { useComments, useUser } from '../../../contexts'
import '../styles.css'

const CommentForm = () => {
  const [commentText, setCommentText] = useState('')

  const { dispatch } = useComments()
  const { user } = useUser()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!commentText.trim()) return

    dispatch(
      { type: 'add', payload: { author: user.username, commentText: commentText} }
    )
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <textarea
        className='form__input'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder='Add a comment...'
        aria-label='Add a comment'
      />
      <button className='form__button'>Send</button>
    </form>
  )
}

export default CommentForm