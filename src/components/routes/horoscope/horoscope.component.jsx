import React, { useContext, useState } from 'react';
import Button from '../../button/button.component.jsx';
import { HoroscopeContext } from '../../context/horoscope/horoscope.context';
import './horoscope.styles.scss';

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
  const { horoscopeData, setSign } = useContext(HoroscopeContext);
  const [showHoroscope, setShowHoroscope] = useState(false);
  const [showCards, setShowCards] = useState(true);
  const [selectedSign, setSelectedSign] = useState('');

  // handle click on each card to show the horoscope info
  const handleClick = (sign) => {
    setSign(sign.name.toLowerCase());
    setSelectedSign(sign.name);
    setShowHoroscope(true);
    setShowCards(false);
  };
  console.log(handleClick)

  // handle click on the X button to hide the horoscope info
  const handleHideHoroscope = () => {
    setShowHoroscope(false);
    setShowCards(true);
  };

  return (
    <div className="container">
      <h1 id="horoscope-title">{horoscopeData.current_date}</h1>

      {/** show the cards if showCards is true */}
      {showCards && (
        <div className="row">
          {signs.map((sign) => (
            <div className="col-md-3 mb-3" key={sign.name} onClick={() => handleClick(sign)}>
              <div className="card">
                <img src={sign.imgSrc} alt={sign.name} />
                <p>{sign.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/** show the horoscope info if showHoroscope is true */}
      {showHoroscope && (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h2>{selectedSign}</h2>
                <button className="btn btn-danger" onClick={handleHideHoroscope}>X</button>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>Color:  {horoscopeData.color}</p>
                  <p>Lucky Number:  {horoscopeData.lucky_number}</p>
                  <p>Lucky Time:  {horoscopeData.lucky_time}</p>
                </div>
                <div className="col-md-6">
                  <p>{horoscopeData.description}</p>
                </div>
                <div id="bottom-line">
                  <p>Wanna now what is the sign of your other half ?</p>
                  <Button buttonType='secondary-button'> Sign Up</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Horoscope;
