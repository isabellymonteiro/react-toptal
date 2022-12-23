import { useState } from 'react'
import { CommentObject } from "../../interfaces"
import { useComments, useUser } from "../../contexts"

const Comment = ({ id, author, commentText, commentVotes }: CommentObject) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedComment, setEditedComment] = useState('')
  
  const { dispatch } = useComments()
  const { user: { username } } = useUser()

  const editComment = () => {
    if (isEditing && editedComment.trim()) {
      if (!editedComment.trim()) {
        setIsEditing(false)
        return
      }
      dispatch({ type: 'edit', payload: { id, newComment: editedComment } })
      setIsEditing(false)
      console.log(isEditing)
      return
    }

    setIsEditing(true)
  }

  return (
    <li>
      <div>
        <button onClick={() => dispatch({ type: 'increment_votes', payload: id })}>+</button>
        <span>{commentVotes}</span>
        <button onClick={() => dispatch({ type: 'decrement_votes', payload: id })}>-</button>
      </div>
      <div>
        <span>{author}</span>
        {username === author &&
          <div>
            <button onClick={() => dispatch({ type: 'delete', payload: id })}>
              Delete
            </button>
            <button onClick={editComment}>
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>
        }
      </div>
      {isEditing 
        ? <input 
            type='text'
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            aria-label='Edit your message'
          />
        : <p>{commentText}</p>
      }
    </li>
  )
}

export default Comment