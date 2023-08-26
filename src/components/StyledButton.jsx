import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// Estilos personalizados
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black', // Fondo negro
  color: 'white',
  margin: '20px',
  padding: '10px 20px', // Espaciado interno
  borderRadius: '8px', // Bordes redondeados
  fontSize: '16px', // Tamaño de fuente
  fontWeight: 'bold', // Negrita
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Sombra ligera
  transition: 'background-color 0.3s, transform 0.3s', // Transiciones suaves
  '&:hover': {
    backgroundColor: '#333', // Cambio de color al pasar el ratón
    transform: 'scale(1.05)', // Escalamiento suave al pasar el ratón
  },
}));

function StyledButton({children}) {
  return (
    <CustomButton>
      {children}
    </CustomButton>
  );
}

export default StyledButton;