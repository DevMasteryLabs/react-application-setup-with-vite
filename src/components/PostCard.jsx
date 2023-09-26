function PostCard({ post }) {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>
        <p className='card-text text-truncate'>{post.body}</p>
        <a href='!#' className='btn btn-primary'>Details...</a>
      </div>
    </div>
  )
}

export default PostCard