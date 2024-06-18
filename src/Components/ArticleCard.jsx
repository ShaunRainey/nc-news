import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ArticleCard({article}) {
    
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
}
  
  export default ArticleCard;