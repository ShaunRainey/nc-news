function ArticleCard({article}) {
    // console.log(article, 'from the article card')
    return(
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
    ) 
}
  
  export default ArticleCard;