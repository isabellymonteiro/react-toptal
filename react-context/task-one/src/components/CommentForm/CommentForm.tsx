import { useState } from 'react'
import { useComments, useUser } from '../../contexts'

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        aria-label='Add a comment'
      />
      <button>Send comment</button>
    </form>
  )
}

export default CommentForm