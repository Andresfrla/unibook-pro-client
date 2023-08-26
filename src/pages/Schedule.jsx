import * as React from 'react';
import Calendar from "../components/Calendar/Calendar"
import CheckboxServices from "../components/CheckboxServices"
import ResponsiveTimePickers from "../components/HourPicker"
import StyledButton from "../components/StyledButton";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Schedule = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" margin="5px">
            <Card variant="outlined" sx={{ maxWidth: 900 }}>
                <CardContent>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <div style={{ textAlign: 'center' }}>
                                <h3>Agenda tu cita</h3>
                                <Calendar />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div >
                                <ResponsiveTimePickers />
                                <CheckboxServices />
                                <StyledButton fullWidth>Reserva ahora!</StyledButton>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Schedule;
