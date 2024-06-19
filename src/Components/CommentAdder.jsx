import { useState } from "react";
import { postComment } from "../Utilities/api";
import { useParams } from "react-router-dom";

const CommentAdder = ({setComments}) => {
    const[newComment, setNewComment] = useState("")
    const[buttonDisabled, setButtonDisabled] = useState(false)

    const {article_id} = useParams();

    const handleSubmit= (event) => {
        event.preventDefault();

        setButtonDisabled(true)

        postComment(article_id,newComment, "grumpy19")
        .then((newCommentFromAPI)=>{
            
            setNewComment("")

            setComments((currComments)=> {
                setButtonDisabled(false)
                return[newCommentFromAPI, ...currComments]
            })
        })
    }
    return(
        <form className="CommentAdder" onSubmit={handleSubmit} id="commentAdder">
            <label htmlFor="newComment">Add a comment </label>
            <textarea className="LabelText" 
            id="newComment"
            multiline="true"
            value={newComment}
            onChange={(event) =>{setNewComment(event.target.value)}}
            required
            ></textarea>
            <button className="InternalButton" disabled={buttonDisabled}>Add</button>
        </form>
    )

}

export default CommentAdder