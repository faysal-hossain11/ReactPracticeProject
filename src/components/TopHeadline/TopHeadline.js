import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);
    

    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=24f39b5b17834cb18210a9c2c7bc54ad'
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
            <h2>total headerline: {articles.length}</h2>
            {
                articles.map( article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;