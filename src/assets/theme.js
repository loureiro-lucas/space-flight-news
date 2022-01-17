import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#302E53',
    },
    secondary: {
      main: '#D07017',
    },
  },
  typography: {
    allVariants: {
      fontFamily: [
        'Roboto Condensed',
        'sans-serif'
      ].join(','),
    },
  },
});

export default customTheme;
