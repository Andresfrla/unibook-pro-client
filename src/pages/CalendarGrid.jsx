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
      checkedHours [`${format(day, 'yyyy-MM-dd')}-${hour}` ] = false 
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
  
  const checkedHours = initCheckHours(hours)
  const [enabledHours, setEnabledHours] = useState([]);
  const [weekDays, setWeekDays] = useState([]);
  const [hourChecked, setHourChecked] = useState(checkedHours);
  const [responseCalendarMessage, setResponseCalendarMessage ] = useState('');
  const [open, setOpen] = React.useState(false);

  const {user} = useContext(AuthContext)
  const {_id : adminId} = user 

  console.log("user: ", user)

  useEffect(() => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(addDays(today, i));
    }
    setWeekDays(days);
    fetchCalendarData()
  }, [open]);

  const toggleHour = (day, hour) => {
    if (enabledHours.includes(`${format(day, 'yyyy-MM-dd')}-${hour}`)) {
      setEnabledHours(enabledHours.filter((item) => item !== `${format(day, 'yyyy-MM-dd')}-${hour}`));
    } else {
      setEnabledHours([...enabledHours, `${format(day, 'yyyy-MM-dd')}-${hour}`]);
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

    for (const [k,v] of Object.entries(hourChecked)) {
      if(v) {
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
    const response = await calendarService.getCalendar(`/api/calendario/${adminId}` )
    console.log("response: ", response)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const availableHours = filterAvailableHours();
      console.log("availableHours: ", availableHours)
      const calendarData = { 
        adminId ,
        availableHours ,
       }
      const response = await calendarService.createOrUpdateCalendar(`/api/calendario/${adminId}`, calendarData) 
      setResponseCalendarMessage(response.data.message)
    } catch (error) {
      console.log(error)
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
        anchorOrigin={{ vertical: 'top',horizontal: 'center' }}
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
        sx={{margin: '10px'}}
        >
          <Typography variant="body1">{format(day, 'EEEE, dd/MM/yyyy')}</Typography>
          {hours.map((hour, ) => (
            <div
              key={`${format(day, 'yyyy-MM-dd')}-${hour}`}
              className={`hour-block ${enabledHours.includes(`${format(day, 'yyyy-MM-dd')}-${hour}`) ? 'enabled' : 'disabled'}`}
              onClick={() => toggleHour(day, hour)}
              style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <ButtonCheckbox
              label={enabledHours.includes(`${format(day, 'yyyy-MM-dd')}-${hour}`) ? `Deshabilitar ${hour}` : `Habilitar ${hour}`}
              variant="contained" size="small"
              name={`${format(day, 'yyyy-MM-dd')}-${hour}`}
              checked={hourChecked[`${format(day, 'yyyy-MM-dd')}-${hour}`]}
              onChange={handleHourChange}
              key={`${format(day, 'yyyy-MM-dd')}-${hour}`}
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
