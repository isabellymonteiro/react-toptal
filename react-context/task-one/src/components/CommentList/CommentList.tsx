import { useComments } from '../../contexts'
import Comment from '../Comment/'

const CommentList = () => {
  const { comments } = useComments()

  const sortedComments = comments.sort((currentComment, nextComment) => 
    nextComment.commentVotes - currentComment.commentVotes
  )

  return (
    <ul>
      {sortedComments.map(comment => <Comment key={comment.id} {...comment} />)}
    </ul>
  )
}

export default CommentList