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
    console.log('Efecto de carga de datos del calendario'); // Agregar un registro de depuración aquí
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
      console.log('toggleHour llamada');
      const timeframe = `${format(day, 'yyyy-MM-dd')}-${hour}`;
      console.log("timeframe: ", timeframe)
      
      if (enabledHours.includes(timeframe)) {
        console.log('Hora deshabilitada:', timeframe);

        // Actualizar el estado para reflejar los cambios después de eliminar
        setEnabledHours((prevEnabledHours) => prevEnabledHours.filter((item) => item !== timeframe));
        console.log('Hora y día eliminados:', timeframe);
      } else {
        console.log('Hora habilitada:', timeframe);
        setEnabledHours([...enabledHours, timeframe]);
      }
      console.log('enabledHours: ', enabledHours)
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
      console.log('Obteniendo datos del calendario desde el servidor'); // Agregar un registro de depuración aquí
      const response = await calendarService.getCalendar(`/api/calendario/${adminId}`);
      console.log('response.data: ', response.data)
      const enabledDays = response.data.calendar.days;
      if(response.data.hasCalendar) {
        console.log("🚀 ~ file: CalendarGrid.jsx:116 ~ fetchCalendarData ~ enabledDays:", enabledDays)
        const enabledTimeframes = enabledDays.flatMap((day) => day.openedHours.flatMap(hour => `${day.name}-${hour}:00`))
        console.log("🚀 ~ file: CalendarGrid.jsx:122 ~ fetchCalendarData ~ enabledTimeframes:", enabledTimeframes)
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
      console.log('Error al obtener datos del calendario:', error); // Agregar un registro de depuración aquí
      // Handle error here
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('Enviando datos al servidor'); // Registro de depuración
      const availableHours = filterAvailableHours();
      const calendarData = {
        adminId,
        availableHours,
      }
      const response = await calendarService.createOrUpdateCalendar(`/api/calendario/${adminId}`, calendarData)
      setResponseCalendarMessage(response.data.message)
    } catch (error) {
      console.log('Error al enviar datos al servidor:', error); // Registro de depuración de errores
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
