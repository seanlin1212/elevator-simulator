"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulator = void 0;
const elevator_1 = require("./elevator");
const passenger_1 = require("./passenger");
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Simulator {
    constructor() {
        this.passengers = [];
        this.elevators = [];
        this.time = 0;
        this.arrivals = 0;
        this.floorPassengers = new Map();
        this.passengerIndex = 0;
    }
    /** 初始化電梯 */
    initElevators() {
        this.elevators = [];
        for (let i = 0; i < Simulator.ELEVATORS; i++) {
            this.elevators.push(new elevator_1.Elevator());
        }
        /** 初始化每層乘客資訊 */
        for (let i = 0; i < elevator_1.Elevator.FLOORS; i++) {
            this.floorPassengers.set(i + 1, []);
        }
    }
    /** 生成隨機乘客資訊 */
    generatePassengers() {
        this.passengers = [];
        console.log('Generate passenger data:');
        for (let i = 0; i < Simulator.PASSENGERS; i++) {
            const from = randomInteger(0, elevator_1.Elevator.FLOORS - 1);
            const to = (from + randomInteger(1, elevator_1.Elevator.FLOORS - 1)) % elevator_1.Elevator.FLOORS;
            this.passengers.push(new passenger_1.Passenger(from + 1, to + 1));
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
        while (this.arrivals < this.passengers.length &&
            this.time < Simulator.TIME_MAX) {
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
    update(t) {
        var _a;
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
                (_a = this.floorPassengers.get(passenger.from)) === null || _a === void 0 ? void 0 : _a.push(passenger);
                this.passengerIndex++;
            }
        }
        console.log(this.floorPassengers);
        this.time += t;
    }
}
exports.Simulator = Simulator;
/** 模擬人次 */
Simulator.PASSENGERS = 40;
/** 每秒幾人 */
Simulator.PASSENGERS_PER_SEC = 1;
/** 電梯數量 */
Simulator.ELEVATORS = 2;
/** 模擬時間上限 */
Simulator.TIME_MAX = 100;
//# sourceMappingURL=simulator.js.map