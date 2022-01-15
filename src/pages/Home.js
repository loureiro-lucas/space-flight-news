import React from 'react';
import Articles from '../components/Articles';
import Header from '../components/Header';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <>
      <Typography>
        <Header />
        <Articles />
      </Typography>
    </>
  )
};

export default Home;
