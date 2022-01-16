import React, { useEffect, useState } from 'react';
import Articles from '../components/Articles';
import ArticleDetails from '../components/ArticleDetails';
import { AMOUNT_PARAM, ARTICLES_URL, CONTAINS_PARAM, fetchArticles, ID_PARAM, SORT_PARAM } from '../services';
import Header from '../components/Header';
import NewsContext from '../context/NewsContext';

const Home = () => {
  const INITIAL_AMOUNT = 10;
  const [amount, setAmount] = useState(INITIAL_AMOUNT);
  const [articlesList, setArticlesList] = useState([]);
  const [articleDetails, setArticleDetails] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [sortInput, setSortInput] = useState('latest');

  const getArticles = async (URL) => {
    const articles = await fetchArticles(URL);
    setArticlesList(articles);
  };

  useEffect(() => {
    getArticles(`${ARTICLES_URL}${AMOUNT_PARAM}${amount}`);
  }, []);

  const loadMoreArticles = () => {
    if (sortInput === 'oldest') {
      getArticles(`${ARTICLES_URL}${AMOUNT_PARAM}${amount + INITIAL_AMOUNT}&${SORT_PARAM}${"publishedAt"}`);
    } else {
      getArticles(`${ARTICLES_URL}${AMOUNT_PARAM}${amount + INITIAL_AMOUNT}`);

    }
    setAmount((prevAmount) => prevAmount + INITIAL_AMOUNT);
  };

  const searchArticles = (event) => {
    event.preventDefault()
    if (sortInput === 'oldest') {
      getArticles(
        !!searchInput
        ? `${ARTICLES_URL}${AMOUNT_PARAM}${INITIAL_AMOUNT}&${CONTAINS_PARAM}${searchInput}&${SORT_PARAM}${"publishedAt"}`
        : `${ARTICLES_URL}${AMOUNT_PARAM}${INITIAL_AMOUNT}&${SORT_PARAM}${"publishedAt"}`
      );
    } else {
      getArticles(
        !!searchInput
        ? `${ARTICLES_URL}${AMOUNT_PARAM}${INITIAL_AMOUNT}&${CONTAINS_PARAM}${searchInput}`
        : `${ARTICLES_URL}${AMOUNT_PARAM}${INITIAL_AMOUNT}`
      );
    };
    setAmount(INITIAL_AMOUNT);
  };

  const sortArticles = ({ target: { value } }) => {
    setSortInput(value);
    if (value === 'oldest') {
      getArticles(`${ARTICLES_URL}${AMOUNT_PARAM}${INITIAL_AMOUNT}&${SORT_PARAM}${"publishedAt"}`);
      setAmount(INITIAL_AMOUNT);
    } else {
      getArticles(`${ARTICLES_URL}${AMOUNT_PARAM}${INITIAL_AMOUNT}`);
      setAmount(INITIAL_AMOUNT);
    };
  };

  const showArticleDetails = async (id) => {
    const details = await fetchArticles(`${ARTICLES_URL}${ID_PARAM}${id}`);
    setArticleDetails(details);
  };

  const closeArticleDetails = () => {
    setArticleDetails({});
  };

  const context = {
    articlesList,
    loadMoreArticles,
    searchInput,
    setSearchInput,
    sortInput,
    setSortInput,
    searchArticles,
    sortArticles,
    showArticleDetails,
    articleDetails,
  };

  return (
    <NewsContext.Provider value={ context }>
      <Header />
      <Articles />
      <ArticleDetails open={ !!articleDetails.id } close={ closeArticleDetails } />
    </NewsContext.Provider>
  )
};

export default Home;
