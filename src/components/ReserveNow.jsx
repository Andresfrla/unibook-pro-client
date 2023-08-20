import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/AddBusiness';

const ReserveNow = () => {
    return(
        <>
            <h2>Bienvenida a la magia</h2>
        <Button variant="contained" sx={{backgroundColor: 'green'}} endIcon={<SendIcon />}>
            Reserva ahora! 
        </Button>
    </>
    )
}

export default ReserveNow