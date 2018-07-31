import * as React from 'react';
import {eventsData, IEvent} from "../eventsData";

class Events extends React.Component<{}, {events: IEvent[]}> {

  public constructor(props: any) {
    super(props);
    this.state = {events: eventsData};
  }

  public render() {
    return (
      <div className="Events">
        {this._getEventButtons()}
      </div>
    )
  }

  private _getEventButtons() {
    const rows = [];

    for (const event of this.state.events) {
      rows.push(
        <div className="Event"
             onClick={this._jumpToTime}
             data-time={event.time}
             style={{'borderColor': event.color}}
             key={event.name}
        >
          <div>{event.name}</div>
          <small>{event.time}:00</small>
        </div>
      );
    }

    return rows;
  }

  private _jumpToTime(e: React.MouseEvent<HTMLDivElement>): void {
    const time = parseInt(e.currentTarget.getAttribute('data-time') || '0', 10);
    // Should pass the player as a dependency and not access it directly
    // Couldn't find a way to do it in the time I had
    // todo: use playerRef :)
    const player = document.getElementsByTagName('audio')[0];
    player.currentTime = time;
    player.play();
  }
}

export default Events;