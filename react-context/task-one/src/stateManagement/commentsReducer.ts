import { v4 as uuidv4 } from 'uuid'
import { data } from '../data'
import { CommentObject } from '../interfaces'

export const initialState: { comments: CommentObject[] } = { comments: data }

export type ActionType = 
  | { type: 'add', payload: Omit<CommentObject, 'id' | 'commentVotes'> }
  | { type: 'edit', payload: { id: string, newComment: string } }
  | { type: 'delete' | 'increment_votes' | 'decrement_votes', payload: string }

export const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'add':
      const newComment = {
        id: uuidv4(), 
        ...action.payload,
        commentVotes: 0
      }
      return { comments: [...state.comments, newComment ]}

    case 'delete':
      return { comments: state.comments.filter(comment => comment.id !== action.payload) }

    case 'edit':
      return {
        comments: state.comments.map(comment => {
          if (comment.id === action.payload.id) {
            comment.commentText = action.payload.newComment
          }
          return comment
        })
      }
      
    case 'increment_votes':
      return {
        // it adds +2 instead of +1 because of <React.StrictMode>
        comments: state.comments.map(comment => {
          if (comment.id === action.payload) {
            comment.commentVotes += 1
          }
          return comment
        })
      }

    case 'decrement_votes':
      return {
        // it subtracts by -2 instead of -1 because of <React.StrictMode>
        comments: state.comments.map(comment => {
          if (comment.id === action.payload && comment.commentVotes > 0) {
            comment.commentVotes -= 1
          }
          console.log(comment)
          return comment
        })
      }
    default:
      throw new Error('No type found.')
  }
}