import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [json, setJson] = useState({});

  useEffect(() => {
    const URL = 'https://aztro.sameerkumar.website/?sign=taurus&day=today';
    fetch(URL, {
      method: 'POST'
    }).then(response => response.json())
      .then(json => { setJson(json) });
  }, []);

  return (
    <div>
      Current Date: {json.current_date} <br />
      Compatibility: {json.compatibility} <br />
      Lucky Number: {json.lucky_number} <br />
      Lucky Time: {json.lucky_time} <br />
      Color: {json.color} <br />
      Date Range: {json.date_range} <br />
      Mood: {json.mood} <br />
      Description: {json.description} <br />
    </div>
  );
}

export default App;
