import React from "react";

import "./App.css";

function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">
        <h1>Random Color Generator</h1>
        <div className="guide">
          <a className="popover" href="https://www.google.com" target="blank">
            {" "}
            pop over button{" "}
          </a>
        </div>
      </div>
    </header>
  );
}

function Button() {
  return <button className="generate-button">generate a random color!</button>;
}

function DropDown1() {
  return (
    <div>
      <label>Select Hue</label>
      <select id="hues">
        <option value="red">RED</option>
        <option value="blue">BLUE</option>
        <option value="green">GREEN</option>
        <option value="aqua">AQUA</option>
      </select>
    </div>
  );
}

function DropDown2() {
  return (
    <div>
      <lbael>Select Luminosity</lbael>
      <select id="lums">
        <option value="100">100</option>
        <option value="80">80</option>
        <option value="60">60</option>
        <option value="40">40</option>
      </select>
    </div>
  );
}

var hue = document.getElementById("scripts");

function getSelectedOption(sel) {
  var opt;
  for (var i = 0, len = sel.options.length; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected === true) {
      break;
    }
  }
  return opt;
}

// var selectedHue = getSelectedOption(hue);

// // display its value and text
// console.log( opt.value );
// console.log( opt.text );

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>

      <div className="Button">
        <div className="selecting">
          <DropDown1 />
          <DropDown2 />
        </div>

        <Button />
      </div>
    </div>
  );
}

export default App;
