import axios from "axios";

const ncNews = axios.create({baseURL:"https://backend-project-5-i6jx.onrender.com/api/"})

export const getArticles = () => {
    return ncNews.get('articles')
    .then((response) => {
        return response.data.articles
    })
} 

export const getArticlesById = (article_id) => {
    return ncNews.get(`articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
} 

export const getComments = (article_id) => {
    return ncNews.get(`articles/${article_id}/comments`)
    .then((response)=>{
        return response.data.comments
    })
}

export const patchArticle = (article_id) => {
    const patchBody = {inc_votes: 1}
    return ncNews.patch(`/articles/${article_id}`, patchBody)
    .then(({data})=>{
        data.article
    })
}

export const postComment = (article_id, newCommentText, user) => {
    const postBody = {
        username: user,
        body: newCommentText
    }
    return ncNews.post(`/articles/${article_id}/comments`, postBody)
    .then(({data})=>{
        return data.comment
    })
}