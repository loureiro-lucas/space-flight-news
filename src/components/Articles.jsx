import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import NewsContext from '../context/NewsContext';
import { Box } from '@mui/material';
import ArticleCard from './ArticleCard';

const Articles = () => {
  const {
    articlesList,
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
    </Container>
  );
};

export default Articles;
