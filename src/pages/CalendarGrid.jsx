import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { format, addDays } from 'date-fns';

const CalendarGrid = () => {
  const [enabledHours, setEnabledHours] = useState([]);
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(addDays(today, i));
    }
    setWeekDays(days);
  }, []);

  const hours = [];
  for (let i = 11; i <= 18; i++) {
    hours.push(`${i}:00`);
  }

  const toggleHour = (day, hour) => {
    if (enabledHours.includes(`${format(day, 'yyyy-MM-dd')}-${hour}`)) {
      setEnabledHours(enabledHours.filter((item) => item !== `${format(day, 'yyyy-MM-dd')}-${hour}`));
    } else {
      setEnabledHours([...enabledHours, `${format(day, 'yyyy-MM-dd')}-${hour}`]);
    }
  };

  return (
    <Grid container className="calendar-grid" alignItems="center" justifyContent="center">
      {weekDays.map((day) => (
        <Grid item key={format(day, 'yyyy-MM-dd')} xs={11} sm={1} >
          <Typography variant="body1">{format(day, 'EEEE, dd/MM/yyyy')}</Typography>
          {hours.map((hour) => (
            <div
              key={`${format(day, 'yyyy-MM-dd')}-${hour}`}
              className={`hour-block ${enabledHours.includes(`${format(day, 'yyyy-MM-dd')}-${hour}`) ? 'enabled' : 'disabled'}`}
              onClick={() => toggleHour(day, hour)}
            >
              <Button variant="contained" size="medium">
                {enabledHours.includes(`${format(day, 'yyyy-MM-dd')}-${hour}`) ? 'Deshabilitar' : 'Habilitar'}
                <br />
                {hour}
              </Button>
            </div>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default CalendarGrid;
