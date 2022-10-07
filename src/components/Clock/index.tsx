import React, { useState, useEffect } from 'react';
import { Clock, Time, Data } from './styled';

export default function DateHour() {
  
  const [dateState, setDateState] = useState(new Date());

  const date = new Date();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const dayWeek = date.getDay()
    const day =  String(date.getDate()).padStart(2, '0');
    const month = date.getMonth();
    const year = date.getFullYear();

    useEffect(() => {
      setInterval(() => setDateState(new Date()), 1000);
  }, []);

    enum Days {
      "domingo" = 0, "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
    }
    
    enum Month {
      "janeiro"= 0, "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    }

    const DateCurrent = `${Days[dayWeek]}, ${day} de ${Month[month]} de ${year}`;
    const HourCurrent = `${hours}:${minutes}`;

    return (
    <Clock>
      <Time>{HourCurrent}</Time>
      <Data>{DateCurrent}</Data>
    </Clock>
    )
}
