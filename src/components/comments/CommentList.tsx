import { CommentWithAuthor } from '@/db/queries/comments'
import { fetchCommentsByPostId } from '@/db/queries/comments'
import CommentShow from '@/components/comments/CommentShow'

interface CommentListProps {
  postId: string
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId)

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  )

  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        postId={postId}
      />
    )
  })

  return (
    <div className="space-y-3">
      <h2 className="text-lg text-white font-bold">All {comments.length} comments</h2>
      {renderedComments}
    </div>
  )
}
