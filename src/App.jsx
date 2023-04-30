import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

const App = () => {
  const quotes = 
  [
    {
      quote: 'quote1',
      author: 'author1'
    },
    {
      quote: 'quote2',
      author: 'author2'
    },
    {
      quote: 'quote3',
      author: 'author3'
    },
    {
      quote: 'quote4',
      author: 'author4'
    },
    {
      quote: 'quote5',
      author: 'author5'
    },
    {
      quote: 'quote6',
      author: 'author6'
    },
    {
      quote: 'quote7',
      author: 'author7'
    },
    {
      quote: 'quote8',
      author: 'author8'
    },
    {
      quote: 'quote9',
      author: 'author9'
    },
    {
      quote: 'quote10',
      author: 'author10'
    },
  ]

  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].quote);
    setAuthor(quotes[randomIndex].author);
  }, []);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].quote);
    setAuthor(quotes[randomIndex].author);
  }

  return (
    <h1 id="quote-box">
      <div id="text">
        {quote}
      </div>

      <div id="author">
        -  {author}
      </div>

      <button onClick={handleClick} id="new-quote">
        New Quote
      </button>

      <a id="tweet-quote" href="twitter.com/intent/tweet">
        Tweet
      </a>
    </h1>
  );
}

export default App;
