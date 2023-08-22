import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/AddBusiness';

const ReserveNow = () => {
    return(
        <>
        <Button variant="contained" sx={{backgroundColor: 'green', marginTop: 10}} endIcon={<SendIcon />}>
            Reserva ahora! 
        </Button>
    </>
    )
}

export default ReserveNow