import React, { useEffect, useState } from 'react';
import Articles from '../components/Articles';
import { ARTICLES_BY_AMOUNT, fetchArticles } from '../services';
import Header from '../components/Header';
import NewsContext from '../context/NewsContext';
import Typography from '@mui/material/Typography';

const Home = () => {
  const INITIAL_AMOUNT = 10;
  const [articlesList, setArticlesList] = useState([]);
  const [amount, setAmount] = useState(INITIAL_AMOUNT);

  const getArticles = async (URL) => {
    const articles = await fetchArticles(URL);
    setArticlesList(articles);
  };

  useEffect(() => {
    getArticles(`${ARTICLES_BY_AMOUNT}${amount}`);
  }, []);

  const context = {
    articlesList,
  };

  return (
    <NewsContext.Provider value={ context }>
      <Typography>
        <Header />
        <Articles />
      </Typography>
    </NewsContext.Provider>
  )
};

export default Home;
