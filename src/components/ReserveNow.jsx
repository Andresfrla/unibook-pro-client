import { Button, ThemeProvider, createTheme } from "@mui/material"
import SendIcon from '@mui/icons-material/AddBusiness';

const theme = createTheme({
    palette: {
      primary: {
        main: '#00A859', 
      },
    },
  });

const ReserveNow = () => {
    return (
        <ThemeProvider theme={theme}>
          <Button
            sx={{
              backgroundImage: 'linear-gradient(45deg, #FF6B98, #FFD3A5)',
              color: 'white',
              borderRadius: '5px',
              padding: '12px 20px',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background-image 0.3s ease',
              margin: '30px',
              gap: '10px', 
              '&:hover': {
                backgroundImage: 'linear-gradient(45deg, #FFD3A5, #FF6B98)',
              },
            }}
            variant="contained"
            startIcon={<SendIcon />} 
          >
            Ordenar ahora
          </Button>
        </ThemeProvider>
      );
    };

export default ReserveNow