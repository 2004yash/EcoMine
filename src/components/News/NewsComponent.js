import React, { useState, useEffect } from 'react';
import './NewsComponent.css'; // Import the CSS file

const API_KEY = "7b866347507d492b9668881199265b68";
const url = "https://newsapi.org/v2/everything?q=coal waste&apiKey=";

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${url}${API_KEY}&pageSize=6`)
      .then(res => res.json())
      .then(data => setArticles(data.articles || []))
      .catch(err => console.error("Failed to fetch news:", err));
  }, []);

  return (
    <div>
      <h1>Carbon Footprint & Coal Waste News</h1>
      <div className="news-container">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className="news-card"
            onMouseEnter={e => {
              e.currentTarget.classList.add('hover');
            }}
            onMouseLeave={e => {
              e.currentTarget.classList.remove('hover');
            }}
          >
            {article.urlToImage && (
              <img 
                src={article.urlToImage} 
                alt="News" 
                className="news-image"
              />
            )}
            <h4 className="news-title">{article.title}</h4>
            <p className="news-description">{article.description}</p>
            <p className="news-source">
              <small>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
