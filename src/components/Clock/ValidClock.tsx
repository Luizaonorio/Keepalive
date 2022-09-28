import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [dateState, setDateState] = useState(new Date());

    const date = new Date();

      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const dayWeek = date.getDay()
      const day =  String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear()

      const DateCurrent = `${dayWeek}, ${day} de ${month} de ${year}`;
      const HourCurrent = `${hours}:${minutes}`;
      console.log(DateCurrent)
      console.log(HourCurrent)


    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
    return 
}

export default App;