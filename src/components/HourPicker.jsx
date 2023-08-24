import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function CustomTimePicker() {
  const [selectedDate, setSelectedDate] = React.useState(dayjs());

  const handleHoursChange = (hours) => {
    setSelectedDate(selectedDate.set('hour', hours).set('minute', 0)); // Establecer minutos a 0
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'TimePicker',
          'MobileTimePicker',
          'DesktopTimePicker',
          'StaticTimePicker',
        ]}
      >
        <DemoItem label="Custom TimePicker">
          <TimePicker
            value={selectedDate}
            onChange={handleHoursChange}
            ampm={false}
            views={['hours']} // Solo mostrar la vista de horas
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}