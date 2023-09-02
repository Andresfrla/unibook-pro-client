import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import DateInput from '../components/DateInput'; // Assuming this component supports a name attribute or callback function
import PasswordField from '../components/PasswordField';
import InstagramButton from '../components/InstagramButton';
import StyledButton from '../components/StyledButton';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { API_URL } from '../utils/constants';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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
        try {
            e.preventDefault();
            const response = await axios.post(`${API_URL}/auth/signup`, signupForm)
            console.log("response: ", response)
            navigate("/login")
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupForm({ ...signupForm, [name]: value });
    }

    // Callback function to update the dateOfBirth field
    const handleDateChange = (date) => {
        setSignupForm({ ...signupForm, dateOfBirth: date });
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" margin={isMobile ? '50px 10px' : '150px'}>
            <Card variant="outlined" sx={{ width: '100%', maxWidth: 400, padding: 2, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <h3>Registrate <br /> o <br /><InstagramButton /></h3>
                        <br />
                        <TextField
                            label="Nombre"
                            sx={{ margin: '10px', width: '100%' }}
                            color="secondary"
                            placeholder="Maria"
                            focused
                            InputProps={{ inputProps: { name: 'name' } }}
                            value={signupForm.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Apellido"
                            sx={{ margin: '10px', width: '100%' }}
                            color="secondary"
                            placeholder="Rodriguez"
                            focused
                            InputProps={{ inputProps: { name: 'lastName' } }}
                            value={signupForm.lastName}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Correo"
                            sx={{ margin: '10px', width: '100%' }}
                            color="secondary"
                            placeholder="maria@jeblush.com"
                            focused
                            InputProps={{ inputProps: { name: 'email' } }}
                            value={signupForm.email}
                            onChange={handleChange}
                        />
                        <DateInput
                            label="Fecha de nacimiento"
                            name="dateOfBirth"
                            handleDateChange={handleDateChange} // Pass the callback function
                        />
                        <PasswordField sx={{ width: '100%' }} />
                        <br />
                        <StyledButton type="submit" fullWidth>Submit</StyledButton>
                    </form>

                    { errorMessage && <p>{errorMessage}</p> }

                    <p>Ya hay una cuenta con este correo</p>
                    <Button 
                    to="/login"
                    component={Link}>Login</Button><br/>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Signup;
