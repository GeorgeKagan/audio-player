import * as React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Events from './components/Events';

import './App.css';
import logo from './logo.svg';
import music from './music.mp3';

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Smart Audio Player Demo</h1>
        </header>
        <p className="App-intro">
          Jump to events by clicking the buttons below the player
        </p>
        <div className="App-main">
            <AudioPlayer
                src={music}
                className="Audio-player"
                progressUpdateInterval={10}
            />
            <Events />
        </div>
      </div>
    );
  }
}

export default App;
