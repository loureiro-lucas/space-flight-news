import React, { useContext } from 'react';
import ArticleCard from './ArticleCard';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import NewsContext from '../context/NewsContext';

const Articles = () => {
  const {
    articlesList,
    loadMoreArticles,
  } = useContext(NewsContext);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
      }}
    >
      {
        articlesList.map(({ id, title, imageUrl, publishedAt, summary, newsSite, url }) => (
          <ArticleCard key={ id } articleData={{ id, title, imageUrl, publishedAt, summary, newsSite, url }} />
        ))
      }
      <Button
        type="button"
        variant="outlined"
        color="secondary"
        onClick={ loadMoreArticles }
      >
        Carregar mais
      </Button>
    </Container>
  );
};

export default Articles;
