function sortArticles(articles, option){

    let sortedArticles = [...articles]

    if(option === 'unsorted'){
    }

    if (option === 'Date created (oldest)'){
        sortedArticles = sortedArticles.sort((a, b) => a.created_at.localeCompare(b.created_at))
    }

    if (option === 'Number of comments (least)'){
        sortedArticles = sortedArticles.sort((a, b) => a.comment_count - b.comment_count)
    }

    if (option === 'Number of votes (least)'){
        sortedArticles = sortedArticles.sort((a, b) => a.votes - b.votes)
    }

    if (option === 'Date created (newest)'){
        sortedArticles = sortedArticles.sort((a, b) => b.created_at.localeCompare(a.created_at))
    }

    if (option === 'Number of comments (most)'){
        sortedArticles = sortedArticles.sort((a, b) => b.comment_count - a.comment_count)
    }

    if (option === 'Number of votes (most)'){
        sortedArticles = sortedArticles.sort((a, b) =>  b.votes - a.votes)
    }

    return sortedArticles
}

// module.exports = sortArticles;

export default sortArticles
