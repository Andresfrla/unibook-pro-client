import React, { useContext, useState } from 'react';
import Calendar from "../components/Calendar/Calendar"
import CheckboxServices from "../components/CheckboxServices"
import ResponsiveTimePickers from "../components/HourPicker"
import StyledButton from "../components/StyledButton";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { format, isValid } from 'date-fns';
import { AuthContext } from '../context/auth.context';
import ReservationService from '../services/reservation.service';
import calendarService from '../services/calendar.service';

const Schedule = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(11); // Default value: 11
    const [checkedServices, setCheckedServices] = useState([])
    
    const { user } = useContext(AuthContext);
    const { _id: userId } = user
     
    const handleDateChange = (date) => {
        if (isValid(date)) {
            setSelectedDate(date); // Establecer la fecha formateada en selectedDate
        } else {
            console.log("Fecha invalida: ", date)
        }

    };

    const handleHourChange = (event) => {
        const newSelectedHour = event.target.value 
        setSelectedHour(newSelectedHour);
    };

    const isHourDisabled = async (hour) => {
        // TO DO: hacer la funcion async para que traiga las horas disponibles
        // const calendarByAdmin = await calendarService.getCalendar(`/${adminId}`)
        return hour < 11 || hour > 19; // Disable hours before 11 AM and after 7 PM
    };

    const createReservation = async () => {
        const formattedDate = format(selectedDate, 'yyyy-MM-dd')
        
        const payload = {
            dayInfo: formattedDate,
            hours: selectedHour,
            services: checkedServices,
            userId,
            isAvailable: false,
        }
        // createReservationApi(payload)
        // const response = await ReservationService.createReservation(`/user/${adminId}`)
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" margin="5px">
            <Card variant="outlined" sx={{ maxWidth: 900 }}>
                <CardContent>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <div style={{ textAlign: 'center' }}>
                                <h3>Agenda tu cita</h3>
                                <Calendar
                                    selectedDate={selectedDate}
                                    handleDateChange={handleDateChange}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div>
                                <ResponsiveTimePickers
                                    selectedHour={selectedHour}
                                    handleHourChange={handleHourChange}
                                    isHourDisabled={isHourDisabled}
                                />
                                <CheckboxServices
                                    checkedServices={checkedServices}
                                    setCheckedServices={setCheckedServices}
                                />
                                <StyledButton onClick={() => createReservation()}>Reserva ahora!</StyledButton>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Schedule;
