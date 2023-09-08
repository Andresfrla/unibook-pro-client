import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css'; 

export default function Calendar({
  selectedDate
  ,handleDateChange}) {
  
  

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