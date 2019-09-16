import './App.css';
import React, { useState } from 'react';
var randomColor = require('randomcolor');

// var randomColor = require("randomcolor");
// let lum = process.argv[2];
// let col = process.argv[3];
// var color = randomColor({
//   luminosity: lum,
//   hue: col
// });

function Header() {
  const [hideguide, setHideguide] = useState(true);

  return (
    <header className="Header">
      <div className="Header-logo">
        <h1>Random Color Generator</h1>
        <div className="guide">
          <button
            className="popover"
            onClick={() => {
              setHideguide(!hideguide);
            }}
          >
            What is it?
          </button>
          <div hidden={hideguide}>
            'blablablablaba blablablablaba blablablablaba'
          </div>
        </div>
      </div>
    </header>
  );
}

function All() {
  const initColor = randomColor();
  const [color, setColor] = useState(initColor);
  const [hue, setHue] = useState('random');
  const [lum, setLum] = useState('random');

  return (
    <div className="All" style={{ backgroundColor: color }}>
      <div className="selecting">
        <div className="hue">
          <label>Select Hue</label>
          <select
            id="hues"
            value={hue}
            onChange={event => {
              setHue(event.target.value);
            }}
          >
            <option value="random">---</option>
            <option value="red">RED</option>
            <option value="blue">BLUE</option>
            <option value="green">GREEN</option>
            <option value="yellow">YELLOW</option>
            <option value="purple">PURPLE</option>
            <option value="orange">ORANGE</option>
          </select>
        </div>
        <div className="luminosity">
          <label>Select Luminosity</label>

          <select
            id="lums"
            value={lum}
            onChange={event => {
              setLum(event.target.value);
            }}
          >
            <option value="random">---</option>
            <option value="light">light</option>
            <option value="bright">bright</option>
            <option value="dark">dark</option>
          </select>
        </div>
      </div>
      <button
        className="generate-button"
        onClick={() => {
          setColor(
            randomColor({
              luminosity: lum,
              hue: hue,
            }),
          );
        }}
      >
        generate a random color!
      </button>
      <br></br>
      <br></br>
      <b>{color}</b>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <All />
    </div>
  );
}

export default App;
