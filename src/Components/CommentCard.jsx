const Comments = ({comment}) =>{

    console.log(comment, 'from comment card')
    return (
        <header className="Comment">
            <p>Comment ID: {comment.comment_id}</p>
            <p>Username: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>Date Posted: {comment.created_at}</p>
        </header>
    )
}

export default Comments;