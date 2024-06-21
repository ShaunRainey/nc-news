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
                <img src={article.article_img_url} alt={"Stock image related to the topic of " + article.topic}/>
                <h2>{article.title}</h2>
                <h4>Author: {article.author}</h4>
                <h4>Topic: {article.topic}</h4>
                <h4>Date Posted: {article.created_at}</h4>
                <h4>Number of Comments: {article.comment_count}</h4>
                <h4>Votes: {article.votes}</h4>
                <h4>Article ID: {article.article_id}</h4>
                </button>
            </Link>
        ) 
    } else {
        return(
            <article className="Article">
                <img src={article.article_img_url} alt={"Stock image related to the topic of " + article.topic}/>
                <h2>{article.title}</h2>
                <h4>Author: {article.author}</h4>
                <h4>Topic: {article.topic}</h4>
                <h4>Date Posted: {article.created_at}</h4>
                <Link to={`/articles/${article.article_id}/comments`}>
                <h4 className="LinkText">Click to see {article.comment_count} comments!</h4>
                </Link>
                <button className="InternalButton" onClick={()=>{upvoteArticle(article.article_id)}} >Votes: {article.votes} </button>
                <h4>Article ID: {article.article_id}</h4>
            </article>
        
        )
    }
}
  
  export default ArticleCard;