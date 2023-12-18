"use client"
import React from 'react';

const CurrentMonthYear = () => {
  const date = new Date();
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const currentMonth = monthNames[date.getMonth()];
  const currentYear = date.getFullYear();

  return (
    <div className='inline'>
      {currentMonth} {currentYear}
    </div>
  );
}

export default CurrentMonthYear;