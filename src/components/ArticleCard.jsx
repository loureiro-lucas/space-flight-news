import React, { useContext } from 'react';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import NewsContext from '../context/NewsContext';

const ArticleCard = ({ articleData: { id, title, imageUrl, publishedAt, summary, newsSite, url } }) => {
  const { showArticleDetails } = useContext(NewsContext);

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        maxWidth: "800px",
        my: 1,
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        image={ imageUrl }
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          { title }
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            { publishedAt.slice(0, 10).split('-').reverse().join('/') }
          </Typography>
          <Link href={ url } color="secondary" underline="none">{ newsSite }</Link>
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            my: 0.5,
          }}
        >
          { summary }
        </Typography>
        <Button
          variant="contained"
          sx={{
            my: 0.5,
          }}
          onClick={ () => showArticleDetails(id) }
        >
          Ver mais
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
