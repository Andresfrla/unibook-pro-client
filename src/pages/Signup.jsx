import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import DateInput from '../components/DateInput';
import PasswordField from '../components/PasswordField';
import InstagramButton from '../components/InstagramButton';
import StyledButton from '../components/StyledButton';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Signup = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" margin={isMobile ? '50px 10px' : '150px'}>
            <Card variant="outlined" sx={{ width: '100%', maxWidth: 400, padding: 2, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                    <h3>Registrate <br /> o <br /><InstagramButton/></h3>
                    <br />
                    <TextField label="Nombre" sx={{ margin: '10px', width: '100%' }} color="secondary" placeholder="Maria" focused />
                    <TextField label="Apellido" sx={{ margin: '10px', width: '100%' }} color="secondary" placeholder='Rodriguez' focused />
                    <TextField label="Correo" sx={{ margin: '10px', width: '100%' }} color="secondary" placeholder='maria@jeblush.com' focused />
                    <PasswordField sx={{ width: '100%' }} />
                    <p><strong>Fecha de nacimiento:</strong></p> <DateInput/>
                    <br />
                    <StyledButton fullWidth>Submit</StyledButton>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Signup;
