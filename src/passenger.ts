import {assert} from 'console';
import {Elevator} from './elevator';

export class Passenger {
  current: number;
  from: number;
  to: number;
  direction: Elevator.Direction;

  constructor(from: number, to: number) {
    assert(to !== from);
    this.current = from;
    this.from = from;
    this.to = to;
    this.direction =
      to > from ? Elevator.Direction.Up : Elevator.Direction.Down;
  }
}
