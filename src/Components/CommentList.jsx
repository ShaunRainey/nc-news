import { useEffect, useState } from "react";
import { getComments} from "../Utilities/api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";

const CommentList = () =>{

    const [comments, setComments] = useState([])
  
    const {article_id} = useParams();
    // console.log(article_id, 'from article list')

    useEffect(() =>{

            // setIsLoading(true);
            getComments(article_id).then((commentsFromApi)=>{
            setComments(commentsFromApi)
            // setIsLoading(false)
        })}
    ,[])
    
    return (
        <main>
            {comments.map((comment)=>{
                return( 
                    <ul className="ArticleList" key={comment.comment_id}>
                        <CommentCard comment = {comment} />
                    </ul>)
            })}
        </main> 
    )
}

export default CommentList;