import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DateInput from '../components/DateInput';
import PasswordField from '../components/PasswordField';
import InstagramButton from '../components/InstagramButton';
import StyledButton from '../components/StyledButton';

const Signup = () => {


    return (
        <>
        <Box>
            <h3>Sign up <strong>or</strong> <InstagramButton/></h3>
            <br />
            
            <TextField label="Nombre" sx={{margin: '10px'}} color="secondary" placeholder="Maria" focused />
            <TextField label="Apellido" sx={{margin: '10px'}} color="secondary" placeholder='Rodriguez' focused />
            <p>Fecha de nacimiento: </p> <DateInput/>
            <TextField label="Correo" sx={{margin: '10px'}} color="secondary" placeholder='maria@jeblush.com' focused />
            <PasswordField/>
            <br />
            <StyledButton>Submit</StyledButton>
        </Box>
        </>
    )
}

export default Signup