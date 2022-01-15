import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import NewsContext from '../context/NewsContext';

const Articles = () => {
  const {
    articlesList,
  } = useContext(NewsContext);

  return (
    <Container>
      {
        articlesList.map(({ id, title }) => (
          <Container key={ id } component="article">
            <p>{ title }</p>
          </Container>
        ))
      }
    </Container>
  );
};

export default Articles;
