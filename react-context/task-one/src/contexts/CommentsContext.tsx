import { createContext, ReactNode, useContext, useReducer } from 'react'
import { CommentObject } from '../interfaces'
import { type ActionType, initialState, reducer } from '../reducers/commentsReducer'

interface CommentsContextProps {
  comments: CommentObject[]
  dispatch: React.Dispatch<ActionType>
}

const CommentsContext = createContext<CommentsContextProps | null>(null)

export const CommentsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = { comments: state.comments, dispatch }

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  )
}

export const useComments = () => {
  const context = useContext(CommentsContext)

  if (!context) {
    throw new Error('useComments must be used within a CommentsProvider')
  }

  return context
}