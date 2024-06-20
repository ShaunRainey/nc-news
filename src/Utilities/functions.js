function sortArticles(articles, option){

    let sortedArticles = [...articles]

    if (option === 'created_at(asc)'){
        sortedArticles = sortedArticles.sort((a, b) => a.created_at.localeCompare(b.created_at))
        return sortedArticles
    }

    if (option === 'comment_count(asc)'){
        sortedArticles = sortedArticles.sort((a, b) => a.comment_count - b.comment_count)
    }

    if (option === 'votes(asc)'){
        sortedArticles = sortedArticles.sort((a, b) => a.votes - b.votes)
    }

    if (option === 'created_at(desc)'){
        sortedArticles = sortedArticles.sort((a, b) => b.created_at.localeCompare(a.created_at))
        return sortedArticles
    }

    if (option === 'comment_count(desc)'){
        sortedArticles = sortedArticles.sort((a, b) => b.comment_count - a.comment_count)
    }

    if (option === 'votes(desc)'){
        sortedArticles = sortedArticles.sort((a, b) =>  b.votes - a.votes)
    }

    return sortedArticles
}

module.exports = sortArticles;
