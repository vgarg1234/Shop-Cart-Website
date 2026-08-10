import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#6c63ff' },
    secondary: { main: '#f50057' },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 6,
          fontWeight: 700,
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #6c63ff 0%, #48c6ef 100%)',
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(135deg, #48c6ef 0%, #6c63ff 100%)',
            boxShadow: '0 4px 15px rgba(108,99,255,0.4)',
          },
        },
      },
    },
  },
});

export default theme;
