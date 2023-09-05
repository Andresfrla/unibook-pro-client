import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import StyledButton from '../components/StyledButton';
import Box from '@mui/material/Box';
/* import PasswordField from '../components/PasswordField'; */
import logo from '../img/logobnw.png'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";

const initLoginForm = {
    email: '',
    password: ''
}

const Login = (props) => {
    const [loginForm, setLoginForm] = React.useState(initLoginForm);
    const [errorMessage, setErrorMessage] = React.useState(undefined)

    const handleLoginForm = (nameField, value) => {
        setLoginForm(prevState => ({ ...prevState, [nameField]: value }))
    }

    const navigate = useNavigate()

    const { 
      storeToken, 
      authenticateUser } = React.useContext(AuthContext);   


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const response = await authService.login(loginForm)
          storeToken(response.data.authToken); 

          authenticateUser();

          navigate('/'); 
        } catch (error) {
            console.log("error.response.data.message: ", error.response.data.message)
            if (error.response.data.message === "User not found.") {
                try {
                    const response = await authService.adminLogin(loginForm)
                    storeToken(response.data.authToken); 
                    authenticateUser();
                    navigate('/'); 
                }
                catch (error) {
                  const errorDescription = error.response.data.message;
                  setErrorMessage(errorDescription);
                  navigate('/signup');
                }
        
            } else {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            }
        }
        

    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" margin={2}> 
            <Card variant="outlined" sx={{ width: '100%', maxWidth: 400, padding: 2, boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
                <form onSubmit={handleSubmit}>
                <CardContent>
                    <h2>Log in</h2>
                    <img src={logo} width='200px' alt='logo'/>
                    <br />
                    <TextField 
                    label="Correo" 
                    sx={{ margin: '10px', width: '100%' }} 
                    color="secondary" 
                    value={loginForm.email}
                    onChange={(e) => handleLoginForm('email', e.target.value)}
                    placeholder='maria@jeblush.com' focused />

                    <TextField
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={loginForm.password}
                    onChange={(e) => handleLoginForm('password', e.target.value)}
                    />
                    <br />
                    <StyledButton type="submit">Login</StyledButton>
                </CardContent>
                </form>

                { errorMessage && <p className="error-message">{errorMessage}</p> }
            </Card>
        </Box>
    )
}

export default Login;