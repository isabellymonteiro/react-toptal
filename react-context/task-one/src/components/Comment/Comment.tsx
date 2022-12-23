import { useState } from 'react'
import { CommentObject } from "../../interfaces"
import { useComments, useUser } from '../../contexts'
import './styles.css'

const Comment = ({ id, author, commentText, commentVotes }: CommentObject) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedComment, setEditedComment] = useState('')
  
  const { dispatch } = useComments()
  const { user: { username } } = useUser()

  if (!username && isEditing) setIsEditing(false)

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
    <li className='commentContainer'>
      <div className='comment__votesContainer'>
        <button 
          className='comment__votesButton'
          onClick={() => dispatch({ type: 'increment_votes', payload: id })}
        >
          +
        </button>
        <span className='comment__votes'>{commentVotes}</span>
        <button
          className='comment__votesButton'
          onClick={() => dispatch({ type: 'decrement_votes', payload: id })}
        >
          -
        </button>
      </div>
      <div className='comment__authorSpecific'>
        <span className='comment__authorName'>{author}</span>
        {username === author &&
          <div className='comment__authorActions'>
            <button 
              className='comment__authorActions--delete'
              onClick={() => dispatch({ type: 'delete', payload: id })}
            >
              Delete
            </button>
            <button className='comment__authorActions--edit' onClick={editComment}>
              {isEditing ? 'Save' : 'Edit'}
            </button>
            {isEditing && 
              <button className='comment__authorActions--cancel' onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            }
          </div>
        }
      </div>
      <div className='comment__text'>
        {isEditing 
          ? <textarea
              className='comment__editing'
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              aria-label='Edit your message'
            />
          : <p className='comment'>{commentText}</p>
        }
      </div>
    </li>
  )
}

export default Comment