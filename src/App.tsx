import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AudioPlayer from 'react-h5-audio-player';
import Events from './components/Events';
import {eventsData, IEvent} from "./eventsData";

import './App.css';
import logo from './logo.svg';
import music from './music.mp3';

class App extends React.Component<{}, {events: IEvent[]}> {

  private playerRef: any;

  public constructor(props: any) {
    super(props);
    this.state = {events: eventsData};
  }

  public componentDidMount() {
    const audio = this.playerRef.audio;
    audio.onloadedmetadata = this.appendEventPoints.bind(this);

    window.addEventListener('resize', () => {
      if (audio.paused) {
        audio.play();
        setTimeout(() => audio.pause(), 1);
      }
      this.appendEventPoints();
    });
  }

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
                ref={(c: any) => (this.playerRef = c)}
            />
            <Events />
        </div>
      </div>
    );
  }

  private appendEventPoints() {
    const duration = this.playerRef.audio.duration;
    const barDiv = this.playerRef.bar;
    const unit = Math.abs(barDiv.offsetWidth / duration);
    const points = [];

    for (const event of this.state.events) {
      points.push(
        <div
          className="Event-point"
          style={{
            'backgroundColor': event.color,
            'left': event.time * unit,
          }}
          title={event.name}
          key={event.name}
        />
      );
    }

    ReactDOM.render(points, barDiv);
  }
}

export default App;
