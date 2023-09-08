import React, { useState } from 'react';
import Calendar from "../components/Calendar/Calendar"
import CheckboxServices from "../components/CheckboxServices"
import ResponsiveTimePickers from "../components/HourPicker"
import StyledButton from "../components/StyledButton";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Schedule = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(11); // Default value: 11
    const [checkedServices, setCheckedServices] = useState([])

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
    };

    const isHourDisabled = (hour) => {
        return hour < 11 || hour > 19; // Disable hours before 11 AM and after 7 PM
    };

    const createReservation = () => {
        const payload = {
            dayInfo: selectedDate,
            hours: selectedHours,
            services: checkedServices,
            userId: 'JWT',
            isAvailable: false,
        }
        createReservationApi(payload)
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
                            <div >
                                <ResponsiveTimePickers
                                    selectedHour={selectedHour}
                                    handleHourChange={handleHourChange}
                                    isHourDisabled={isHourDisabled}
                                />
                                <CheckboxServices
                                    checkedServices={checkedServices}
                                    setCheckedServices={setCheckedServices}
                                />
                                <StyledButton fullWidth onClick={() => createReservation()}>Reserva ahora!</StyledButton>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Schedule;
