import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Header = () => {
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
          <TextField
            type="text"
            name="search"
            label="Buscar"
            variant="outlined"
            size="small"
            sx={{ width: "200px", m: 1 }}
            // value={  }
            // onChange={  }
          />
          <Button
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
          <FormControl>
            <InputLabel id="company-label">Company</InputLabel>
            <Select
              labelId="company-label"
              name="company"
              label="Company"
              // value={  }
              size="small"
              sx={{ width: "200px", m: 1 }}
              // onChange={  }
              >
              <MenuItem value={''}></MenuItem>
              <MenuItem value={''}></MenuItem>
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
          <RocketLaunchIcon color="primary" fontSize="large" sx={{ my: 1 }} />
          <Typography variant="h4" component="h1" color="primary">
            Space Flight News
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
