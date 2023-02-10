import React, { useState, useEffect } from 'react';

// Create a context for the horoscope data
export const HoroscopeContext = React.createContext();

const HoroscopeProvider = ({ children }) => {
  // set the initial state of the horoscope data
  const [horoscopeData, setHoroscopeData] = useState({});

  // fetch the horoscope data from the API
  useEffect(() => {
    const URL = 'https://aztro.sameerkumar.website/?sign=taurus&day=today';
    fetch(URL, {
      method: 'POST'
    }).then(response => response.json())
      .then(json => { setHoroscopeData(json) });
  }, []);

  // return the context provider with the horoscope data
  return (
    <HoroscopeContext.Provider value={{ horoscopeData }}>
      {children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;

// TO USE LATER IN THE APP (retrieve the horoscope data from the context):
// const { horoscopeData } = useContext(HoroscopeContext);

// return (
//   <div>
//     Current Date: {horoscopeData.current_date} <br />
//     Compatibility: {horoscopeData.compatibility} <br />
//     Lucky Number: {horoscopeData.lucky_number} <br />
//     Lucky Time: {horoscopeData.lucky_time} <br />
//     Color: {horoscopeData.color} <br />
//     Date Range: {horoscopeData.date_range} <br />
//     Mood: {horoscopeData.mood} <br />
//     Description: {horoscopeData.description} <br />
//   </div>
// );
