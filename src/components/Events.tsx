import * as React from 'react';

class Events extends React.Component {

  private static _getEventButtons(events: Array<{name: string, time: number}>) {
    const rows = [];

    for (let i = 0; i < events.length; i++) {
      rows.push(
        <div className="Event"
             key={i}
             onClick={Events._jumpToTime}
             data-time={events[i].time}
        >
          <div>{events[i].name}</div>
          <small>{events[i].time}:00</small>
        </div>
      );
    }

    return rows;
  }

  private static _jumpToTime(e: any): any {
    const time = e.currentTarget.getAttribute('data-time');
    // Should pass the player as a dependency and not access it directly
    // Couldn't find a way to do it in the time I had
    const player = document.getElementsByTagName('audio')[0];
    player.currentTime = time;
    player.play();
  }

  // Should get from API
  private events = [
    {name: 'Event 1', time: 13},
    {name: 'Event 2', time: 23},
    {name: 'Event 3', time: 33}
  ];

  public render() {
    return (
      <div className="Events">
        {Events._getEventButtons(this.events)}
      </div>
    )
  }
}

export default Events;