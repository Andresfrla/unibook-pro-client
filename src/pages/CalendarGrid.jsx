import React, { useState, useEffect, useContext } from 'react';
import { Alert, Grid, Snackbar, Typography } from '@mui/material';
import { format, addDays } from 'date-fns';
import ButtonCheckbox from '../components/ButtonCheckbox';
import StyledButton from '../components/StyledButton';
import calendarService from '../services/calendar.service';
import { AuthContext } from '../context/auth.context';

const initCheckHours = (hours) => {
  const today = new Date();
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(addDays(today, i));
  }

  const checkedHours = {}

  for (const day of days) {
    for (const hour of hours) {
      checkedHours[`${format(day, 'yyyy-MM-dd')}-${hour}`] = false
    }
  }
  return checkedHours
}

/* {`${format(day, 'yyyy-MM-dd')}-${hour}`} : false */

const CalendarGrid = () => {
  const hours = [];
  for (let i = 11; i <= 18; i++) {
    hours.push(`${i}:00`);
  }


  const [enabledHours, setEnabledHours] = useState([]);
  const [weekDays, setWeekDays] = useState([]);
  const [responseCalendarMessage, setResponseCalendarMessage] = useState('');
  const [open, setOpen] = React.useState(false);

  const { user } = useContext(AuthContext)
  const { _id: adminId } = user

  const checkedHours = initCheckHours(hours)
  const [hourChecked, setHourChecked] = useState(checkedHours);
  
  useEffect(() => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(addDays(today, i));
    }
    setWeekDays(days);
    fetchCalendarData();
  }, []);

  const toggleHour = async (day, hour, adminId) => {

    try {      
      const timeframe = `${format(day, 'yyyy-MM-dd')}-${hour}`;
      
      if (enabledHours.includes(timeframe)) {

        // Actualizar el estado para reflejar los cambios después de eliminar
        setEnabledHours((prevEnabledHours) => prevEnabledHours.filter((item) => item !== timeframe));
      } else {
        setEnabledHours([...enabledHours, timeframe]);
      }
    } catch (error) {
      console.error('Error al eliminar el día y la hora:', error);
      // Maneja el error según tus necesidades
    }
  };
  

  const handleHourChange = (event) => {
    setHourChecked((prevChecked) => ({
      ...prevChecked,
      [event.target.name]: event.target.checked,
    }));
  };

  const filterAvailableHours = () => {
    const selectedDays = []

    for (const [k, v] of Object.entries(hourChecked)) {
      if (v) {
        selectedDays.push(k)
      }
    }
    return selectedDays;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const fetchCalendarData = async () => {
    try {
      const response = await calendarService.getCalendar(`/api/calendario/${adminId}`);
      const enabledDays = response.data.calendar.days;
      if(response.data.hasCalendar) {
        const enabledTimeframes = enabledDays.flatMap((day) => day.openedHours.flatMap(hour => `${day.name}-${hour}:00`))
        if (enabledTimeframes.length > 0) {
          const updatedHourChecked = {...hourChecked};
          for (const enabledTimeframe of enabledTimeframes) {
            updatedHourChecked[enabledTimeframe] = false;
          }
          setHourChecked(updatedHourChecked);
          setEnabledHours(enabledTimeframes)
        }
      }
    } catch (error) {
      console.log(error);
      // Handle error here
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const availableHours = filterAvailableHours();
      const calendarData = {
        adminId,
        availableHours,
      }
      const response = await calendarService.createOrUpdateCalendar(`/api/calendario/${adminId}`, calendarData)
      setResponseCalendarMessage(response.data.message)
    } catch (error) {
      setResponseCalendarMessage(`Error sending data: ${error.message}`);
    }
    setOpen(true)
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ width: '70%', color: 'black' }}
      >
        <Alert
          severity="success">
          {responseCalendarMessage}
        </Alert>
      </Snackbar>
      <form onSubmit={handleSubmit}>
        <Grid container className="calendar-grid" alignItems="center" justifyContent="center">
          {weekDays.map((day) => (
            <Grid
              item key={format(day, 'yyyy-MM-dd')}
              xs={8}
              sm={1}
              sx={{ margin: '10px' }}
            >
              <Typography variant="body1">{format(day, 'EEEE, dd/MM/yyyy')}</Typography>
              {hours.map((hour) => (
                <div
                  key={`${format(day, 'yyyy-MM-dd')}-${hour}`}
                  className={`hour-block ${enabledHours.includes(`${format(day, 'yyyy-MM-dd')}-${hour}`) ? 'enabled' : 'disabled'}`}
                  onClick={() => {
                    toggleHour(day, hour, adminId)}}
                  style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <ButtonCheckbox
                    label={enabledHours.includes(`${format(day, 'yyyy-MM-dd')}-${hour}`) ? `Deshabilitar ${hour}` : `Habilitar ${hour}`}
                    variant="contained" size="small"
                    name={`${format(day, 'yyyy-MM-dd')}-${hour}`}
                    checked={hourChecked[`${format(day, 'yyyy-MM-dd')}-${hour}`]}
                    onChange={handleHourChange}
                  >
                  </ButtonCheckbox>
                </div>
              ))}
            </Grid>
          ))}
        </Grid>


        <StyledButton
          type="submit"
        >
          Guardar
        </StyledButton>
      </form>
    </>

  );
};

export default CalendarGrid;
