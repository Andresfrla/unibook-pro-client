import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css'; 

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        inline
        className="custom-datepicker" 
      />
    </div>
  );
}