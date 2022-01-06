export class Elevator {
  state: Elevator.State;
  direction: Elevator.Direction;
  floor: number;

  constructor() {
    this.state = Elevator.State.Idle;
    this.direction = Elevator.Direction.None;
    this.floor = 1;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Elevator {
  export enum State {
    Idle,
    Open,
    Moving,
  }

  export enum Direction {
    None,
    Up,
    Down,
  }
}
