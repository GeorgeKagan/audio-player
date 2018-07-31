// Should get from API
export const eventsData = [
  {name: 'Event 1', time: 13, color: 'pink'},
  {name: 'Event 2', time: 42, color: 'lightgreen'},
  {name: 'Event 3', time: 99, color: 'violet'},
];

export interface IEvent {
  name: string;
  time: number;
  color: string;
}