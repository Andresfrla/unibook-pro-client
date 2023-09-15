import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
// import InstagramButton from '../components/InstagramButton';
import StyledButton from '../components/StyledButton';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { API_URL } from '../utils/constants';

const initForm = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '', 
}

const Signup = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [signupForm, setSignupForm] = React.useState(initForm);
    const [errorMessage, setErrorMessage ] = React.useState(undefined);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/auth/signup`, signupForm)
            navigate("/login")
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    const handleSignupForm = (nameField, value) => {

        setSignupForm(prevState => ({ ...prevState, [nameField]: value }))
    }

    

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" margin={isMobile ? '50px 10px' : '150px'}>
            <Card variant="outlined" sx={{ width: '100%', maxWidth: 400, padding: 2, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <h3>Registrate </h3>
                        <br />
                        <TextField
                            label="Nombre"
                            sx={{ margin: '10px', width: '100%' }}
                            color="secondary"
                            placeholder="Maria"
                            focused
                            InputProps={{ inputProps: { name: 'name' } }}
                            value={signupForm.name}
                            onChange={(e) => handleSignupForm('name', e.target.value)}
                        />

                        <TextField
                            label="Apellido"
                            sx={{ margin: '10px', width: '100%' }}
                            color="secondary"
                            placeholder="Rodriguez"
                            focused
                            InputProps={{ inputProps: { name: 'lastName' } }}
                            value={signupForm.lastName}
                            onChange={(e) => handleSignupForm('lastName', e.target.value)}
                        />
                        <TextField
                            label="Correo"
                            sx={{ margin: '10px', width: '100%' }}
                            color="secondary"
                            placeholder="maria@jeblush.com"
                            focused
                            InputProps={{ inputProps: { name: 'email' } }}
                            value={signupForm.email}
                            onChange={(e) => handleSignupForm('email', e.target.value)}
                        />
                        <DatePicker
                            label="Fecha de nacimiento"
                            name="dateOfBirth"
                            value={signupForm.dateOfBirth}
                            sx={{margin: '10px'}}
                            onChange={(value) => {
                                handleSignupForm('dateOfBirth', value.$d)
                            }
                            }
                        />
                        
                        <TextField
                        required
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="new-password"
                        onChange={(e) => handleSignupForm("password", e.target.value)}
                        />
                        <br />
                        <StyledButton type="submit">Submit</StyledButton>
                    </form>
                    
                    { errorMessage && <p>
                        <p>Ya hay una cuenta con este correo</p>
                    <Button 
                    to="/login"
                    component={Link}>Login</Button><br/>
                        {errorMessage}</p> }


                </CardContent>
            </Card>
        </Box>
    )
}

export default Signup;
