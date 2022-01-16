import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import NewsContext from '../context/NewsContext';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  const {
    searchInput,
    setSearchInput,
    sortInput,
    searchArticles,
    sortArticles,
  } = useContext(NewsContext);

  return (
    <AppBar
      position="static"
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f9f9f9"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            my: 1
          }}
        >
          <form onSubmit={ searchArticles }>
            <TextField
              type="text"
              name="search"
              label="Buscar"
              variant="outlined"
              size="small"
              sx={{ width: "200px", m: 1 }}
              value={ searchInput }
              onChange={ ({ target: { value } }) => setSearchInput(value) }
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                height: "40px",
                my: 1,
                p: 0,
                width: "10px",
              }}
            >
              <SearchIcon sx={{ p: 0 }} />
            </Button>
          </form>
          <FormControl>
            <InputLabel sx={{ m: 1 }} id="sort-label">Ordenar</InputLabel>
            <Select
              labelId="sort-label"
              name="sort"
              label="Ordenar"
              value={ sortInput }
              size="small"
              sx={{ width: "200px", m: 1 }}
              onChange={ sortArticles }
            >
              <MenuItem value={'latest'}>Mais recentes</MenuItem>
              <MenuItem value={'oldest'}>Mais antigas</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <RocketLaunchIcon color="primary" fontSize="large" sx={{ my: 2 }} />
          <Typography variant="h5" component="h1" color="primary">
            Space Flight News
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
