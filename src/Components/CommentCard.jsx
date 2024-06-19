const Comments = ({comment}) =>{

    // console.log(comment, 'from comment card')
    return (
        <header className="Comment">
            <p>Comment ID: {comment.comment_id}</p>
            <p>Comment by: {comment.author} {comment.created_at}</p>
            <p>{comment.body}</p>
            <button className="VoteButton">Votes: {comment.votes}</button>
        </header>
    )
}

export default Comments;