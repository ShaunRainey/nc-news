import { deleteComment } from "../Utilities/api";

const Comments = ({comment, setComments}) =>{
    const user = "grumpy19"

    const handleClick = () => {
  
        return deleteComment(comment.comment_id)
        .then(()=>{alert('Your comment has been deleted'); location.reload()})

    }

    return (comment.author === user ? 
        <header className="Comment">
            <p>Comment ID: {comment.comment_id}</p>
            <p>Comment by: {comment.author} {comment.created_at}</p>
            <p>{comment.body}</p>
            <button className="InternalButton">Votes: {comment.votes}</button>
            <button className="InternalButton" onClick={handleClick}>Delete Comment</button>
        </header>
     :
        <header className="Comment">
            <p>Comment ID: {comment.comment_id}</p>
            <p>Comment by: {comment.author} {comment.created_at}</p>
            <p>{comment.body}</p>
            <button className="InternalButton">Votes: {comment.votes}</button>
        </header>
    )
}

export default Comments;