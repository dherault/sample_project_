import React, { Component } from 'react';

const randomNumber = () => Math.floor((Math.random() * 1000) + 1;

class Timer extends Component {

  state = {
    timeEnd: null,
    item: randomNumber(),
    duration: [0, 0, 0, 0],
  }

  setDuration(n, duration) {
    const { duration } = this.state;
    
  }

  render() {
    /*<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>*/
    // To get started, edit <code>src/App.js</code> and save to reload.
    // {clicked && (
    // )}
    // const { gridSize } = this.state;
    // <div className="App">
    //   <h1>{'Jarred\'s shop'}</h1>
    //   <p>Closed due to lack of knowledge</p>
    //   <Timer />
    // </div>

    return (
      <div>

      </div>
    );
  }
}
