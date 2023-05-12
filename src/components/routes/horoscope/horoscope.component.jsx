import React, { useContext, useState } from 'react';
import Button from '../../button/button.component.jsx';
import { HoroscopeContext } from '../../context/horoscope/horoscope.context';

import './horoscope.styles.scss';
import strings from '../../../string.js';

// import signs Images
import { signs } from '../../../signImages.js';

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
                  <p>{strings.horoscopePage.colorText}:  {horoscopeData.color}</p>
                  <p>{strings.horoscopePage.luckyNumberText}:  {horoscopeData.lucky_number}</p>
                  <p>{strings.horoscopePage.luckyTimeText}:  {horoscopeData.lucky_time}</p>
                </div>
                <div className="col-md-6">
                  <p>{horoscopeData.description}</p>
                </div>
                <div id="bottom-line">
                  <p>{strings.horoscopePage.messageText}</p>
                  <Button>{strings.general.signUpButtonText}</Button>
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
