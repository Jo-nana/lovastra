import { HoroscopeContext } from '../../context/horoscope/horoscope.context';
import React, { useContext } from 'react';


const Home  = () => {

  const { horoscopeData } = useContext(HoroscopeContext);

  return (
    <div>
      Current Date: {horoscopeData.current_date} <br />
      Compatibility: {horoscopeData.compatibility} <br />
      Lucky Number: {horoscopeData.lucky_number} <br />
      Lucky Time: {horoscopeData.lucky_time} <br />
      Color: {horoscopeData.color} <br />
      Date Range: {horoscopeData.date_range} <br />
      Mood: {horoscopeData.mood} <br />
      Description: {horoscopeData.description} <br />
    </div>
  );
}

export default Home;
