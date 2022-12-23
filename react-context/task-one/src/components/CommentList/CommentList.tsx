import { useComments } from '../../contexts'
import Comment from '../Comment/'
import './styles.css'

const CommentList = () => {
  const { comments } = useComments()

  const sortedComments = comments.sort((currentComment, nextComment) => 
    nextComment.commentVotes - currentComment.commentVotes
  )

  return (
    <ul className='commentsList'>
      {sortedComments.map(comment => <Comment key={comment.id} {...comment} />)}
    </ul>
  )
}

export default CommentList