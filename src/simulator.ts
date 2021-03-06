import {Elevator} from './elevator';
import {Passenger} from './passenger';

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Simulator {
  /** 模擬人次 */
  static readonly PASSENGERS = 40;
  /** 每秒幾人 */
  static readonly PASSENGERS_PER_SEC = 1;
  /** 電梯數量 */
  static readonly ELEVATORS = 2;
  /** 模擬時間上限 */
  static readonly TIME_MAX = 100;

  /** 乘客資料 */
  passengers: Passenger[];
  /** 電梯 */
  elevators: Elevator[];
  /** 執行時間 */
  time: number;
  /** 已完成乘客數量 */
  arrivals: number;
  /** 各樓層等待的乘客 */
  floorPassengers: Map<number, Passenger[]>;
  /** 當前執行到的乘客index */
  passengerIndex: number;
  constructor() {
    this.passengers = [];
    this.elevators = [];
    this.time = 0;
    this.arrivals = 0;
    this.floorPassengers = new Map<number, Passenger[]>();
    this.passengerIndex = 0;
  }

  /** 初始化電梯 */
  initElevators() {
    this.elevators = [];
    for (let i = 0; i < Simulator.ELEVATORS; i++) {
      this.elevators.push(new Elevator());
    }

    /** 初始化每層乘客資訊 */
    for (let i = 0; i < Elevator.FLOORS; i++) {
      this.floorPassengers.set(i + 1, []);
    }
  }

  /** 生成隨機乘客資訊 */
  generatePassengers() {
    this.passengers = [];

    console.log('Generate passenger data:');
    for (let i = 0; i < Simulator.PASSENGERS; i++) {
      const from = randomInteger(0, Elevator.FLOORS - 1);
      const to =
        (from + randomInteger(1, Elevator.FLOORS - 1)) % Elevator.FLOORS;

      this.passengers.push(new Passenger(from + 1, to + 1));
      console.log(`(${from + 1}, ${to + 1})`);
    }
  }

  /** 初始化 */
  init() {
    this.initElevators();
    this.generatePassengers();
  }

  /** 開始模擬並輸出結果 */
  start() {
    console.log('Simulation start!');

    // eslint-disable-next-line no-constant-condition
    while (
      this.arrivals < this.passengers.length &&
      this.time < Simulator.TIME_MAX
    ) {
      this.update(1);

      // 檢查完成人數
      this.arrivals = 0;
      for (const passenger of this.passengers) {
        if (passenger.current === passenger.to) {
          this.arrivals++;
        }
      }
      console.log(`Time spent: ${this.time}, arrivals: ${this.arrivals}`);
    }

    console.log(`Simulation finished! Total time spent: ${this.time} seconds!`);
  }

  update(t: number) {
    // 先更新電梯
    for (let i = 0; i < Simulator.ELEVATORS; i++) {
      this.elevators[i].update(1, this.floorPassengers);

      console.log(this.elevators[i]);
    }

    // 再更新排隊乘客
    for (let i = 0; i < Simulator.PASSENGERS_PER_SEC; i++) {
      if (this.passengerIndex < this.passengers.length) {
        // 增加排隊乘客
        const passenger = this.passengers[this.passengerIndex];
        this.floorPassengers.get(passenger.from)?.push(passenger);

        this.passengerIndex++;
      }
    }
    console.log(this.floorPassengers);

    this.time += t;
  }
}
