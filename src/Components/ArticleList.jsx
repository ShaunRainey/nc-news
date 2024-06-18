import { useEffect, useState } from "react";
import { getArticles, getArticlesById } from "../Utilities/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticleList = () =>{

    const [articles, setArticles] = useState([])

    const {article_id} = useParams();

    useEffect(() =>{
        if(article_id){
            getArticlesById(article_id).then((articlesFromApi)=>{
                setArticles([articlesFromApi])
            })
        } else {
            getArticles().then((articlesFromApi)=>{
                setArticles(articlesFromApi)
            })
        }
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