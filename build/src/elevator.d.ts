export declare class Elevator {
    constructor();
    state: Elevator.State;
    floor: number;
}
export declare namespace Elevator {
    enum State {
        Idle = 0,
        Open = 1,
        Moving = 2
    }
}
