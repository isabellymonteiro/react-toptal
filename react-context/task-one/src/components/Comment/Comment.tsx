import { useState } from 'react'
import { CommentObject } from "../../interfaces"
import { useComments, useUser } from '../../contexts'
import styles from './Comment.module.css'

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
      return
    }

    setIsEditing(true)
  }

  return (
    <li className={styles.commentContainer}>
      <div className={styles.votesContainer}>
        <button 
          className={`${styles.button} ${styles.votesButton}`}
          onClick={() => dispatch({ type: 'increment_votes', payload: id })}
        >
          +
        </button>
        <span className={styles.votes}>{commentVotes}</span>
        <button
          className={`${styles.button} ${styles.votesButton}`}
          onClick={() => dispatch({ type: 'decrement_votes', payload: id })}
        >
          -
        </button>
      </div>
      <div className={styles.authorSpecific}>
        <span className={styles.authorName}>{author}</span>
        {username === author &&
          <div className={styles.authorActions}>
            <button 
              className={`${styles.button} ${styles.deleteButton}`}
              onClick={() => dispatch({ type: 'delete', payload: id })}
            >
              Delete
            </button>
            <button className={`${styles.button} ${styles.editButton}`} onClick={editComment}>
              {isEditing ? 'Save' : 'Edit'}
            </button>
            {isEditing && 
              <button className={`${styles.button} ${styles.cancelButton}`} onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            }
          </div>
        }
      </div>
      <div className={styles.comment}>
        {isEditing 
          ? <textarea
              className={styles.commentTextarea}
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              aria-label='Edit your message'
            />
          : <p className={styles.commentText}>{commentText}</p>
        }
      </div>
    </li>
  )
}

export default Comment