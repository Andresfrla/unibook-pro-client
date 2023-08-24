import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import StyledButton from '../components/StyledButton';
import Box from '@mui/material/Box';
import PasswordField from '../components/PasswordField';
import logo from '../img/logobnw.png'

const Login = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" margin={2}> 
            <Card variant="outlined" sx={{ width: '100%', maxWidth: 400, padding: 2, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                    <h2>Log in</h2>
                    <img src={logo} width='200px' alt='logo'/>
                    <br />
                    <TextField label="Correo" sx={{ margin: '10px', width: '100%' }} color="secondary" placeholder='maria@jeblush.com' focused />
                    <PasswordField sx={{ width: '100%' }} />
                    <br />
                    <StyledButton fullWidth>Login</StyledButton>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Login;