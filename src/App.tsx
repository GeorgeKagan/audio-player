import * as React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import './App.css';
import logo from './logo.svg';
import music from './music.mp3';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <AudioPlayer src={music} />
      </div>
    );
  }
}

export default App;
