import axios from "axios";

const ncNews = axios.create({baseURL:"https://backend-project-5-i6jx.onrender.com/api/"})

export const getArticles = () => {
    return ncNews.get('/articles')
    .then((response) => {
        return response.data.articles
    })
} 