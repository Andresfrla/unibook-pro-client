import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E1306C', 
    },
  },
});

const InstagramButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{
            backgroundImage: 'linear-gradient(45deg, #405DE6, #E1306C, #FD1D1D, #F56040, #FFDC80)',
            color: 'white',
            margin: '20px',
            '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #1A3897, #C72C5E, #FFAA15, #F56040, #FFDC80)',
            },
        }}
        variant="contained"
        startIcon={<InstagramIcon/>}
      >
        Iniciar sesión con Instagram
      </Button>
    </ThemeProvider>
  );
};

export default InstagramButton;