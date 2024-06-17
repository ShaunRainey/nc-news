import { useEffect, useState } from "react";
import { getArticles } from "../Utilities/api";
import ArticleCard from "./ArticleCard";


const ArticleList = () =>{

    const [articles, setArticles] = useState([])
    useEffect(() =>{
        getArticles().then((articlesFromApi)=>{
            setArticles(articlesFromApi)
        })
    },[])

    return (
        <main>
        {articles.map((article)=>{
            // console.log(article.article_id)
            return( 
                <ul className="ArticleList" key={article.article_id}>
                    <ArticleCard article = {article} />
                </ul>)
        })}
        </main> 
    )
}

export default ArticleList;