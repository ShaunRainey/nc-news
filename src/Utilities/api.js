import axios from "axios";

const ncNews = axios.create({baseURL:"https://backend-project-5-i6jx.onrender.com/api/"})

export const getArticles = () => {
    return ncNews.get('articles')
    .then((response) => {
        return response.data.articles
    })
} 

export const getArticlesById = (article_id) => {
    // console.log(article_id, 'from api')
    return ncNews.get(`articles/${article_id}`)
    .then((response) => {
        // console.log(response.data.article)
        return response.data.article
    })
} 

export const getComments = (article_id) => {
    // console.log(article_id, 'from api')
    return ncNews.get(`articles/${article_id}/comments`)
    .then((response)=>{
        // console.log(response.data.comments,' from api')
        return response.data.comments
    })
}