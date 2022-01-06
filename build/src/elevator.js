"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elevator = void 0;
class Elevator {
    constructor() {
        this.state = Elevator.State.Idle;
        this.floor = 1;
    }
}
exports.Elevator = Elevator;
// eslint-disable-next-line @typescript-eslint/no-namespace
(function (Elevator) {
    let State;
    (function (State) {
        State[State["Idle"] = 0] = "Idle";
        State[State["Open"] = 1] = "Open";
        State[State["Moving"] = 2] = "Moving";
    })(State = Elevator.State || (Elevator.State = {}));
})(Elevator = exports.Elevator || (exports.Elevator = {}));
//# sourceMappingURL=elevator.js.map