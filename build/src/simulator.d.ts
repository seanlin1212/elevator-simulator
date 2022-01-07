import { Elevator } from './elevator';
import { Passenger } from './passenger';
export declare class Simulator {
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
    constructor();
    /** 初始化電梯 */
    initElevators(): void;
    /** 生成隨機乘客資訊 */
    generatePassengers(): void;
    /** 初始化 */
    init(): void;
    /** 開始模擬並輸出結果 */
    start(): void;
    update(t: number): void;
}
