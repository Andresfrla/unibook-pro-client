import { Button, TextField } from "@mui/material"
import PasswordField from "../components/PasswordField"

const Login = () => {
    return(
        <>
            <h2>Log in</h2>
            <br />
            <TextField label="Correo" sx={{margin: '10px'}} color="secondary" placeholder='maria@jeblush.com' focused />
            <PasswordField/>
            <br />
            <Button 
            sx={{
                margin: '20px',
                backgroundColor: 'black',
            }}variant="contained">Login</Button>
        </>
    )
}

export default Login