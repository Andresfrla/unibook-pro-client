import Calendar from "../components/Calendar/Calendar"
import ResponsiveTimePickers from "../components/HourPicker"

const Schedule = () => {
    return (
        <>
            <h3>Agenda tu cita</h3>
            <Calendar/>
            <ResponsiveTimePickers />
        </>
    )
}

export default Schedule