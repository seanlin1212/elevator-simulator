import {Passenger} from './passenger';

export class Elevator {
  /** 樓層數 */
  static readonly FLOORS = 10;
  /** 乘載人數 */
  static readonly CAPACITY = 5;
  /** 開門時間為1秒 */
  static readonly OPEN_TIME = 1;
  /** 每層樓移動時間為1秒 */
  static readonly MOVING_TIME = 1;

  state: Elevator.State;
  direction: Elevator.Direction;
  /** 電梯所在樓層 */
  floor: number;
  passengers: Passenger[];
  time: number;

  constructor() {
    this.state = Elevator.State.Idle;
    this.direction = Elevator.Direction.Up;
    this.floor = 1;
    this.passengers = [];
    this.time = 0;
  }

  /** 是否滿載 */
  isFull() {
    return this.passengers.length >= Elevator.CAPACITY;
  }

  /** 從等待乘客中挑出一位 */
  selectPassenger(floorPassengers: Map<number, Passenger[]>) {
    const passengers = floorPassengers.get(this.floor);
    // 先找當前樓層的乘客
    if (passengers !== undefined && passengers.length > 0) {
      return passengers[0];
    } else {
      for (let i = 0; i < Elevator.FLOORS; i++) {
        const passengers = floorPassengers.get(i + 1);
        // 從最底層開始找(這邊可以根據電梯的direction向上或向下找)
        if (passengers !== undefined && passengers.length > 0) {
          return passengers[0];
        }
      }
    }

    return null;
  }
  update(t: number, floorPassengers: Map<number, Passenger[]>) {
    switch (this.state) {
      case Elevator.State.Idle:
        // eslint-disable-next-line no-case-declarations
        const passenger = this.selectPassenger(floorPassengers);
        if (passenger) {
          // 有乘客要搭電梯
          if (passenger.from === this.floor) {
            // 同一層，直接開門
            this.direction = passenger.direction;
            this.changeState(Elevator.State.Open);
          } else {
            // 不同層，開始移動
            this.direction =
              passenger.from > this.floor
                ? Elevator.Direction.Up
                : Elevator.Direction.Down;
            this.changeState(Elevator.State.Moving);
          }
        }

        break;
      case Elevator.State.Open:
        this.time += t;
        if (this.time >= Elevator.OPEN_TIME) {
          this.time = 0;
          // 乘客下電梯
          this.dropPassengers();

          // 乘客上電梯
          if (!this.isFull()) {
            this.pickPassengers(floorPassengers);
          }

          if (this.passengers.length === 0) {
            // 當前無乘客
            this.changeState(Elevator.State.Idle);
          } else {
            // 繼續移動
            this.changeState(Elevator.State.Moving);
          }
        }
        break;
      case Elevator.State.Moving:
        this.time += t;
        if (this.time >= Elevator.MOVING_TIME) {
          this.time = 0;
          // 電梯移動一層樓完成
          if (this.direction === Elevator.Direction.Up) {
            this.floor++;
            if (this.floor === Elevator.FLOORS) {
              // 換方向
              this.direction = Elevator.Direction.Down;
            }
          } else {
            this.floor--;
            if (this.floor === 1) {
              // 換方向
              this.direction = Elevator.Direction.Up;
            }
          }

          // 電梯裡外都沒人了
          if (
            this.passengers.length === 0 &&
            !this.selectPassenger(floorPassengers)
          ) {
            this.changeState(Elevator.State.Idle);
            return;
          }

          // 有人出電梯
          if (this.passengers.length > 0) {
            for (const passenger of this.passengers) {
              if (passenger.to === this.floor) {
                this.changeState(Elevator.State.Open);
                return;
              }
            }
          }

          // 有人在等電梯
          const passengers = floorPassengers.get(this.floor);
          if (passengers !== undefined && passengers.length > 0) {
            for (const passenger of passengers) {
              if (passenger.direction === this.direction) {
                this.changeState(Elevator.State.Open);
                return;
              }
            }
          }
        }
        break;
      default:
        break;
    }
  }

  /** 乘客下電梯 */
  dropPassengers() {
    // 下電梯，反序進行
    for (let i = this.passengers.length - 1; i >= 0; i--) {
      if (this.passengers[i].to === this.floor) {
        this.passengers[i].current = this.floor;
        this.passengers.splice(i, 1);
      }
    }
  }

  /** 乘客進電梯 */
  pickPassengers(floorPassengers: Map<number, Passenger[]>) {
    const passengers = floorPassengers.get(this.floor);
    const pickCounts = Elevator.CAPACITY - this.passengers.length;
    for (let i = 0; i < pickCounts; i++) {
      if (passengers !== undefined && passengers.length > 0) {
        for (let j = 0; j < passengers.length; j++) {
          const passenger = passengers[j];
          if (passenger.direction === this.direction) {
            // 找到第一個方向一樣的，進電梯
            this.passengers.push(passenger);

            // 從等待列表移除
            passengers.splice(j, 1);
            break;
          }
        }
      }
    }
  }

  changeState(state: Elevator.State) {
    this.state = state;
    this.time = 0;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Elevator {
  export enum State {
    Idle = 'Idle',
    Open = 'Open',
    Moving = 'Moving',
  }

  export enum Direction {
    None = 'None',
    Up = 'Up',
    Down = 'Down',
  }
}
