import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { patchArticle } from "../Utilities/api";

function ArticleCard({article, setArticles}) {

    const upvoteArticle = (article_id) => {
        patchArticle(article_id)

        setArticles((currArticles)=>{
            return currArticles.map(article =>{
                if(article.article_id === article_id){
                    return {...article, votes: article.votes +1}
                }
                return article
            })
        })
    }

    const {article_id} = useParams();
    if(!article_id){
        return(
            <Link to={`/articles/${article.article_id}`}>
                <button className="Button">
                <img src={article.article_img_url}/>
                <p>{article.title}</p>
                <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Date Posted: {article.created_at}</p>
                <p>Number of Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
                <p>Article ID: {article.article_id}</p>
                </button>
            </Link>
        ) 
    } else {
        return(
            <article className="Article">
                <img src={article.article_img_url}/>
                <p>{article.title}</p>
                <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Date Posted: {article.created_at}</p>
                <Link to={`/articles/${article.article_id}/comments`}>
                <p>Click to see {article.comment_count} comments!</p>
                </Link>
                <button className="VoteButton" onClick={()=>{upvoteArticle(article.article_id)}} >Votes: {article.votes} </button>
                <p>Article ID: {article.article_id}</p>
            </article>
        
        )
    }
}
  
  export default ArticleCard;