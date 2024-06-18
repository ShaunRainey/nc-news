import { useEffect, useState } from "react";
import { getArticles, getArticlesById } from "../Utilities/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticleList = () =>{
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {article_id} = useParams();
    // console.log(article_id, 'from article list')

    useEffect(() =>{
        if(article_id){
            getArticlesById(article_id)
            .then((articlesFromApi)=>{
            setArticles([articlesFromApi])
        })
        } else {
            setIsLoading(true);
            getArticles().then((articlesFromApi)=>{
            setArticles(articlesFromApi)
            setIsLoading(false)
        })}
    },[article_id])
    
    return (
        <main>
            {articles.map((article)=>{
                return( 
                    <ul className="ArticleList" key={article.article_id}>
                        <ArticleCard article = {article} />
                    </ul>)
            })}
        </main> 
    )
}

export default ArticleList;