import Calendar from "../components/Calendar/Calendar"
import CheckboxServices from "../components/CheckboxServices"
import ResponsiveTimePickers from "../components/HourPicker"
import StyledButton from "../components/StyledButton"

const Schedule = () => {
    return (
        <div style={{margin: '40px'}}>
            <h3>Agenda tu cita</h3>
            <Calendar/>
            <ResponsiveTimePickers />
            <CheckboxServices/>
            <StyledButton>Reserva ahora!</StyledButton>
        </div>
    )
}

export default Schedule