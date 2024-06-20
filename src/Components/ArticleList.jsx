import { useEffect, useState } from "react";
import { getArticles, getArticlesById, getArticlesByTopic } from "../Utilities/api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";

const ArticleList = () =>{
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {article_id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    
   const topicQuery = searchParams.get('topic')

    useEffect(() =>{
        if(article_id){
            setIsLoading(true);
            getArticlesById(article_id)
            .then((articlesFromApi)=>{
            setArticles([articlesFromApi])
            setIsLoading(false)
        })
        } else if(topicQuery) {
            setIsLoading(true);
            getArticlesByTopic(topicQuery).then((articlesFromApi)=>{
            setArticles(articlesFromApi)
            setIsLoading(false)
        })} else {
            setIsLoading(true);
            getArticles().then((articlesFromApi)=>{
            setArticles(articlesFromApi)
            setIsLoading(false)  
            })
        }
    },[article_id, topicQuery])

    if(isLoading) {
        return (
        <div className="WaitingForInfo">
            <h2>The information is on its way!</h2>
            <img src="https://images.squarespace-cdn.com/content/v1/5b65297275f9eecd1c7ad526/1540853174790-JUOB0AW2VT7XJIRUSW47/Baby-Wombat-running-down-hallway.gif?format=1000w" alt="A wombat with a mission" />
        </div>
)}
    
    return (
        <main>
            {articles.map((article)=>{
                return( 
                    <ul className="ArticleList" key={article.article_id}>
                        <ArticleCard article = {article} setArticles={setArticles} />
                    </ul>)
            })}
        </main> 
    )
}

export default ArticleList;