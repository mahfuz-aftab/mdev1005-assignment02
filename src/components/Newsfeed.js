import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Newsfeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3b6fe86728144dc8a4c1d96c09f5e946')
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
   
    <div className="col-7">
      <h4>Newsfeed</h4>
      <ul>
        {articles.map(article => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Newsfeed;