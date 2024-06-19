import { useEffect, useState } from "react";
import { getComments} from "../Utilities/api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { useParams } from "react-router-dom";

const CommentList = () =>{

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const {article_id} = useParams();

    useEffect(() =>{

            setIsLoading(true);
            getComments(article_id).then((commentsFromApi)=>{
            setComments(commentsFromApi)
            setIsLoading(false)
        })}
    ,[])

    return (
        <main>
            <CommentAdder setComments={setComments}/>
            {comments.map((comment)=>{
                return( 
                    <ul className="CommentList" key={comment.comment_id}>
                        <CommentCard comment = {comment} />
                    </ul>)
            })}
        </main> 
    )
}

export default CommentList;