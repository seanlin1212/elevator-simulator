import { Elevator } from './elevator';
export declare class Passenger {
    current: number;
    from: number;
    to: number;
    direction: Elevator.Direction;
    constructor(from: number, to: number);
}
