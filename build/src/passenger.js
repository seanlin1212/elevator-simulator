"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
const console_1 = require("console");
const elevator_1 = require("./elevator");
class Passenger {
    constructor(from, to) {
        (0, console_1.assert)(to !== from);
        this.current = from;
        this.from = from;
        this.to = to;
        this.direction =
            to > from ? elevator_1.Elevator.Direction.Up : elevator_1.Elevator.Direction.Down;
    }
}
exports.Passenger = Passenger;
//# sourceMappingURL=passenger.js.map