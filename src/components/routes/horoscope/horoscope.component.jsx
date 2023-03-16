import React, { useContext } from 'react';
import { HoroscopeContext } from '../../context/horoscope/horoscope.context';

// importing the images for each signs
import ariesImage from '../../../assets/images/logoSigns/aries.svg';
import taurusImage from '../../../assets/images/logoSigns/taurus.svg';
import geminiImage from '../../../assets/images/logoSigns/gemini.svg';
import cancerImage from '../../../assets/images/logoSigns/cancer.svg';
import leoImage from '../../../assets/images/logoSigns/leo.svg';
import virgoImage from '../../../assets/images/logoSigns/virgo.svg';
import libraImage from '../../../assets/images/logoSigns/libra.svg';
import scorpioImage from '../../../assets/images/logoSigns/scorpio.svg';
import sagittariusImage from '../../../assets/images/logoSigns/sagittarius.svg';
import capricornImage from '../../../assets/images/logoSigns/capricorn.svg';
import aquariusImage from '../../../assets/images/logoSigns/aquarius.svg';
import piscesImage from '../../../assets/images/logoSigns/pisces.svg';


// array of objects for each sign
const signs = [
  { name: 'Aries', imgSrc: ariesImage },
  { name: 'Taurus', imgSrc: taurusImage },
  { name: 'Gemini', imgSrc: geminiImage },
  { name: 'Cancer', imgSrc: cancerImage },
  { name: 'Leo', imgSrc: leoImage },
  { name: 'Virgo', imgSrc: virgoImage },
  { name: 'Libra', imgSrc: libraImage },
  { name: 'Scorpio', imgSrc: scorpioImage },
  { name: 'Sagittarius', imgSrc: sagittariusImage },
  { name: 'Capricorn', imgSrc: capricornImage },
  { name: 'Aquarius', imgSrc: aquariusImage },
  { name: 'Pisces', imgSrc: piscesImage }
];


const Horoscope = () => {
  const { horoscopeData } = useContext(HoroscopeContext);

  return(
    <div className="container">
      <div>
      {signs.map((sign) => (
        <div className="sign-card" key={sign.name}>
          <img src={sign.imgSrc} alt={sign.name} />
          <p>{sign.name}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Horoscope;
