import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

export default function DigitalClockTimeStep() {
  const [selectedHour, setSelectedHour] = React.useState(11); // Default value: 11

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const isHourDisabled = (hour) => {
    return hour < 11 || hour > 19; // Disable hours before 11 AM and after 7 PM
  };

  return (
    <div style={{margin: '40px'}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
        <DemoItem label="Selecciona la hora de tu servicio">
          <FormControl>
            <Select
              value={selectedHour}
              onChange={handleHourChange}
              sx={{ backgroundColor: 'white' }}
            >
              {Array.from({ length: 8 }, (_, index) => 11 + index).map((hour) => (
                <MenuItem key={hour} value={hour} disabled={isHourDisabled(hour)}>
                  {`${hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}
