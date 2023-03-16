import React, { useContext } from 'react';
import { HoroscopeContext } from '../../context/horoscope/horoscope.context';

const Horoscope = () => {

  const { horoscopeData } = useContext(HoroscopeContext);

  return(
    <div className="container">
      <div>
        {/* render the horoscope data */}
        <h1>{horoscopeData.current_date}</h1>
        <h2>{horoscopeData.date_range}</h2>
        <p>{horoscopeData.description}</p>
      </div>
    </div>
  )
}

export default Horoscope;
