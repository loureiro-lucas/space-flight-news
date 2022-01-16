import React, { useContext } from 'react';
import Box from '@mui/system/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import NewsContext from '../context/NewsContext';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: "1000px",
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    width: "1000px",
  },
}));

const ArticleDetails = ({ open, close }) => {
  const { articleDetails: { title, imageUrl, publishedAt, summary, url } } = useContext(NewsContext);

  return (
    <BootstrapDialog
      onClose={close}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="xl"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}
    >
      <DialogContent
        dividers
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
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
              { !!publishedAt && publishedAt.slice(0, 10).split('-').reverse().join('/') }
            </Typography>
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
        </CardContent>
      </DialogContent>
      <DialogActions
        sx={{ justifyContent: "center" }}
      >
        <Link sx={{ my: 1 }} href={ url } underline="none">Ir para o site</Link>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default ArticleDetails;
