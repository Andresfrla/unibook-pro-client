import { TextField } from "@mui/material"
import PasswordField from "../components/PasswordField"
import StyledButton from "../components/StyledButton"

const Login = () => {
    return(
        <>
            <h2>Log in</h2>
            <br />
            <TextField label="Correo" sx={{margin: '10px'}} color="secondary" placeholder='maria@jeblush.com' focused />
            <PasswordField/>
            <br />
            <StyledButton>Login</StyledButton>
        </>
    )
}

export default Login