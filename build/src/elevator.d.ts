import { Passenger } from './passenger';
export declare class Elevator {
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
    constructor();
    /** 是否滿載 */
    isFull(): boolean;
    /** 從等待乘客中挑出一位 */
    selectPassenger(floorPassengers: Map<number, Passenger[]>): Passenger | null;
    update(t: number, floorPassengers: Map<number, Passenger[]>): void;
    /** 乘客下電梯 */
    dropPassengers(): void;
    /** 乘客進電梯 */
    pickPassengers(floorPassengers: Map<number, Passenger[]>): void;
    changeState(state: Elevator.State): void;
}
export declare namespace Elevator {
    enum State {
        Idle = "Idle",
        Open = "Open",
        Moving = "Moving"
    }
    enum Direction {
        None = "None",
        Up = "Up",
        Down = "Down"
    }
}
