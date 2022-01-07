# elevator-simulator
<pre><code>
C:\Program Files\nodejs\node.exe .\build\src\index.js
Generate passenger data:
(10, 2)
(7, 4)
(1, 4)
(6, 3)
(2, 8)
(7, 8)
(8, 7)
(8, 2)
(8, 2)
(4, 7)
(3, 8)
(1, 7)
(10, 4)
(5, 7)
(2, 9)
(9, 3)
(7, 10)
(9, 1)
(10, 6)
(10, 5)
(5, 1)
(4, 2)
(1, 4)
(7, 1)
(8, 2)
(5, 2)
(1, 10)
(3, 7)
(1, 7)
(10, 4)
(8, 10)
(2, 1)
(4, 1)
(6, 10)
(1, 7)
(10, 5)
(3, 1)
(9, 3)
(9, 10)
(2, 3)
Simulation start!
Elevator {state: 'Idle', direction: 'Up', floor: 1, passengers: Array(0), time: 0}
Elevator {state: 'Idle', direction: 'Up', floor: 1, passengers: Array(0), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 1, arrivals: 0
Elevator {state: 'Moving', direction: 'Up', floor: 1, passengers: Array(0), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 1, passengers: Array(0), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 2, arrivals: 0
Elevator {state: 'Moving', direction: 'Up', floor: 2, passengers: Array(0), time: 1}
Elevator {state: 'Moving', direction: 'Up', floor: 2, passengers: Array(0), time: 1}
Map(10) {size: 10, 1 => (1) [Passenger], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 3, arrivals: 0
Elevator {state: 'Moving', direction: 'Up', floor: 3, passengers: Array(0), time: 2}
Elevator {state: 'Moving', direction: 'Up', floor: 3, passengers: Array(0), time: 2}
Map(10) {size: 10, 1 => (1) [Passenger], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 4, arrivals: 0
Elevator {state: 'Moving', direction: 'Up', floor: 4, passengers: Array(0), time: 3}
Elevator {state: 'Moving', direction: 'Up', floor: 4, passengers: Array(0), time: 3}
Map(10) {size: 10, 1 => (1) [Passenger], 2 => (1) [Passenger], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 5, arrivals: 0
Elevator {state: 'Moving', direction: 'Up', floor: 5, passengers: Array(0), time: 4}
Elevator {state: 'Moving', direction: 'Up', floor: 5, passengers: Array(0), time: 4}
Map(10) {size: 10, 1 => (1) [Passenger], 2 => (1) [Passenger], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 6, arrivals: 0
Elevator {state: 'Moving', direction: 'Up', floor: 6, passengers: Array(0), time: 5}
Elevator {state: 'Moving', direction: 'Up', floor: 6, passengers: Array(0), time: 5}
Map(10) {size: 10, 1 => (1) [Passenger], 2 => (1) [Passenger], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 7, arrivals: 0
Elevator {state: 'Open', direction: 'Up', floor: 7, passengers: Array(0), time: 0}
Elevator {state: 'Open', direction: 'Up', floor: 7, passengers: Array(0), time: 0}
Map(10) {size: 10, 1 => (1) [Passenger], 2 => (1) [Passenger], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 8, arrivals: 0
Elevator {state: 'Moving', direction: 'Up', floor: 7, passengers: Array(1), time: 0}
Elevator {state: 'Idle', direction: 'Up', floor: 7, passengers: Array(0), time: 0}
Map(10) {size: 10, 1 => (1) [Passenger], 2 => (1) [Passenger], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 9, arrivals: 0
Elevator {state: 'Open', direction: 'Up', floor: 8, passengers: Array(1), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 7, passengers: Array(0), time: 0}
Map(10) {size: 10, 1 => (1) [Passenger], 2 => (1) [Passenger], 3 => (0) [], 4 => (1) [Passenger], 5 => (0) [], …}
Time spent: 10, arrivals: 0
Elevator {state: 'Idle', direction: 'Up', floor: 8, passengers: Array(0), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 7, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (1) [Passenger], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (0) [], …}
Time spent: 11, arrivals: 1
Elevator {state: 'Open', direction: 'Down', floor: 8, passengers: Array(0), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 6, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (0) [], …}
Time spent: 12, arrivals: 1
Elevator {state: 'Moving', direction: 'Down', floor: 8, passengers: Array(3), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 6, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (0) [], …}
Time spent: 13, arrivals: 1
Elevator {state: 'Open', direction: 'Down', floor: 7, passengers: Array(3), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 5, passengers: Array(2), time: 1}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (1) [Passenger], …}
Time spent: 14, arrivals: 1
Elevator {state: 'Moving', direction: 'Down', floor: 7, passengers: Array(2), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 4, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (2) [Passenger, …], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (1) [Passenger], …}
Time spent: 15, arrivals: 2
Elevator {state: 'Moving', direction: 'Down', floor: 6, passengers: Array(2), time: 1}
Elevator {state: 'Moving', direction: 'Down', floor: 4, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (2) [Passenger, …], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (1) [Passenger], …}
Time spent: 16, arrivals: 3
Elevator {state: 'Moving', direction: 'Down', floor: 5, passengers: Array(2), time: 2}
Elevator {state: 'Open', direction: 'Down', floor: 3, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (2) [Passenger, …], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (1) [Passenger], …}
Time spent: 17, arrivals: 3
Elevator {state: 'Moving', direction: 'Down', floor: 4, passengers: Array(2), time: 3}
Elevator {state: 'Idle', direction: 'Down', floor: 3, passengers: Array(0), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (2) [Passenger, …], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (1) [Passenger], …}
Time spent: 18, arrivals: 4
Elevator {state: 'Moving', direction: 'Down', floor: 3, passengers: Array(2), time: 4}
Elevator {state: 'Open', direction: 'Up', floor: 3, passengers: Array(0), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (2) [Passenger, …], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (1) [Passenger], …}
Time spent: 19, arrivals: 4
Elevator {state: 'Open', direction: 'Down', floor: 2, passengers: Array(2), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 3, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (2) [Passenger, …], 3 => (0) [], 4 => (1) [Passenger], 5 => (1) [Passenger], …}
Time spent: 20, arrivals: 4
Elevator {state: 'Idle', direction: 'Down', floor: 2, passengers: Array(0), time: 0}
Elevator {state: 'Open', direction: 'Up', floor: 4, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (2) [Passenger, …], 3 => (0) [], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 21, arrivals: 6
Elevator {state: 'Open', direction: 'Up', floor: 2, passengers: Array(0), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 4, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (2) [Passenger, …], 2 => (2) [Passenger, …], 3 => (0) [], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 22, arrivals: 6
Elevator {state: 'Moving', direction: 'Up', floor: 2, passengers: Array(2), time: 0}
Elevator {state: 'Open', direction: 'Up', floor: 5, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (3) [Passenger, …], 2 => (0) [], 3 => (0) [], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 23, arrivals: 6
Elevator {state: 'Moving', direction: 'Up', floor: 3, passengers: Array(2), time: 1}
Elevator {state: 'Moving', direction: 'Up', floor: 5, passengers: Array(3), time: 0}
Map(10) {size: 10, 1 => (3) [Passenger, …], 2 => (0) [], 3 => (0) [], 4 => (1) [Passenger], 5 => (1) [Passenger], …}
Time spent: 24, arrivals: 6
Elevator {state: 'Moving', direction: 'Up', floor: 4, passengers: Array(2), time: 2}
Elevator {state: 'Moving', direction: 'Up', floor: 6, passengers: Array(3), time: 1}
Map(10) {size: 10, 1 => (3) [Passenger, …], 2 => (0) [], 3 => (0) [], 4 => (1) [Passenger], 5 => (1) [Passenger], …}
Time spent: 25, arrivals: 6
Elevator {state: 'Moving', direction: 'Up', floor: 5, passengers: Array(2), time: 3}
Elevator {state: 'Open', direction: 'Up', floor: 7, passengers: Array(3), time: 0}
Map(10) {size: 10, 1 => (3) [Passenger, …], 2 => (0) [], 3 => (0) [], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 26, arrivals: 6
Elevator {state: 'Moving', direction: 'Up', floor: 6, passengers: Array(2), time: 4}
Elevator {state: 'Moving', direction: 'Up', floor: 7, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (4) [Passenger, …], 2 => (0) [], 3 => (0) [], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 27, arrivals: 8
Elevator {state: 'Moving', direction: 'Up', floor: 7, passengers: Array(2), time: 5}
Elevator {state: 'Open', direction: 'Up', floor: 8, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (4) [Passenger, …], 2 => (0) [], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 28, arrivals: 8
Elevator {state: 'Open', direction: 'Up', floor: 8, passengers: Array(2), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 8, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (5) [Passenger, …], 2 => (0) [], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 29, arrivals: 9
Elevator {state: 'Moving', direction: 'Up', floor: 8, passengers: Array(1), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 9, passengers: Array(1), time: 1}
Map(10) {size: 10, 1 => (5) [Passenger, …], 2 => (0) [], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 30, arrivals: 10
Elevator {state: 'Open', direction: 'Up', floor: 9, passengers: Array(1), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 10, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (5) [Passenger, …], 2 => (0) [], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 31, arrivals: 10
Elevator {state: 'Idle', direction: 'Up', floor: 9, passengers: Array(0), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 10, passengers: Array(5), time: 0}
Map(10) {size: 10, 1 => (5) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (1) [Passenger], 5 => (2) [Passenger, …], …}
Time spent: 32, arrivals: 12
Elevator {state: 'Open', direction: 'Down', floor: 9, passengers: Array(0), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 9, passengers: Array(5), time: 0}
Map(10) {size: 10, 1 => (5) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (2) [Passenger, …], 5 => (2) [Passenger, …], …}
Time spent: 33, arrivals: 12
Elevator {state: 'Moving', direction: 'Down', floor: 9, passengers: Array(2), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 9, passengers: Array(5), time: 0}
Map(10) {size: 10, 1 => (5) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (2) [Passenger, …], 5 => (2) [Passenger, …], …}
Time spent: 34, arrivals: 12
Elevator {state: 'Open', direction: 'Down', floor: 8, passengers: Array(2), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 8, passengers: Array(5), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (2) [Passenger, …], 5 => (2) [Passenger, …], …}
Time spent: 35, arrivals: 12
Elevator {state: 'Moving', direction: 'Down', floor: 8, passengers: Array(3), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 8, passengers: Array(5), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (2) [Passenger, …], 5 => (2) [Passenger, …], …}
Time spent: 36, arrivals: 12
Elevator {state: 'Open', direction: 'Down', floor: 7, passengers: Array(3), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 7, passengers: Array(5), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (1) [Passenger], 3 => (2) [Passenger, …], 4 => (2) [Passenger, …], 5 => (2) [Passenger, …], …}
Time spent: 37, arrivals: 12
Elevator {state: 'Moving', direction: 'Down', floor: 7, passengers: Array(4), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 7, passengers: Array(5), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (1) [Passenger], 3 => (2) [Passenger, …], 4 => (2) [Passenger, …], 5 => (2) [Passenger, …], …}
Time spent: 38, arrivals: 12
Elevator {state: 'Moving', direction: 'Down', floor: 6, passengers: Array(4), time: 1}
Elevator {state: 'Open', direction: 'Down', floor: 6, passengers: Array(5), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (1) [Passenger], 3 => (2) [Passenger, …], 4 => (2) [Passenger, …], 5 => (2) [Passenger, …], …}
Time spent: 39, arrivals: 12
Elevator {state: 'Open', direction: 'Down', floor: 5, passengers: Array(4), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 6, passengers: Array(4), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (2) [Passenger, …], 3 => (2) [Passenger, …], 4 => (2) [Passenger, …], 5 => (2) [Passenger, …], …}
Time spent: 40, arrivals: 13
Elevator {state: 'Moving', direction: 'Down', floor: 5, passengers: Array(5), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 5, passengers: Array(4), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (2) [Passenger, …], 3 => (2) [Passenger, …], 4 => (2) [Passenger, …], 5 => (1) [Passenger], …}
Time spent: 41, arrivals: 13
Elevator {state: 'Open', direction: 'Down', floor: 4, passengers: Array(5), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 5, passengers: Array(4), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (2) [Passenger, …], 3 => (2) [Passenger, …], 4 => (2) [Passenger, …], 5 => (0) [], …}
Time spent: 42, arrivals: 14
Elevator {state: 'Moving', direction: 'Down', floor: 4, passengers: Array(5), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 4, passengers: Array(4), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (2) [Passenger, …], 3 => (2) [Passenger, …], 4 => (2) [Passenger, …], 5 => (0) [], …}
Time spent: 43, arrivals: 14
Elevator {state: 'Open', direction: 'Down', floor: 3, passengers: Array(5), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 4, passengers: Array(4), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (2) [Passenger, …], 3 => (2) [Passenger, …], 4 => (0) [], 5 => (0) [], …}
Time spent: 44, arrivals: 16
Elevator {state: 'Moving', direction: 'Down', floor: 3, passengers: Array(5), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 3, passengers: Array(4), time: 1}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (2) [Passenger, …], 3 => (1) [Passenger], 4 => (0) [], 5 => (0) [], …}
Time spent: 45, arrivals: 17
Elevator {state: 'Open', direction: 'Down', floor: 2, passengers: Array(5), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 2, passengers: Array(4), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (2) [Passenger, …], 3 => (1) [Passenger], 4 => (0) [], 5 => (0) [], …}
Time spent: 46, arrivals: 17
Elevator {state: 'Moving', direction: 'Down', floor: 2, passengers: Array(5), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 2, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (0) [], 5 => (0) [], …}
Time spent: 47, arrivals: 21
Elevator {state: 'Open', direction: 'Up', floor: 1, passengers: Array(5), time: 0}
Elevator {state: 'Open', direction: 'Up', floor: 1, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (6) [Passenger, …], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (0) [], 5 => (0) [], …}
Time spent: 48, arrivals: 21
Elevator {state: 'Moving', direction: 'Up', floor: 1, passengers: Array(5), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 1, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (0) [], 5 => (0) [], …}
Time spent: 49, arrivals: 27
Elevator {state: 'Open', direction: 'Up', floor: 2, passengers: Array(5), time: 0}
Elevator {state: 'Open', direction: 'Up', floor: 2, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (1) [Passenger], 3 => (1) [Passenger], 4 => (0) [], 5 => (0) [], …}
Time spent: 50, arrivals: 27
Elevator {state: 'Moving', direction: 'Up', floor: 2, passengers: Array(5), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 2, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (1) [Passenger], 4 => (0) [], 5 => (0) [], …}
Time spent: 51, arrivals: 27
Elevator {state: 'Open', direction: 'Up', floor: 3, passengers: Array(5), time: 0}
Elevator {state: 'Open', direction: 'Up', floor: 3, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (1) [Passenger], 4 => (0) [], 5 => (0) [], …}
Time spent: 52, arrivals: 27
Elevator {state: 'Moving', direction: 'Up', floor: 3, passengers: Array(5), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 3, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 53, arrivals: 28
Elevator {state: 'Open', direction: 'Up', floor: 4, passengers: Array(5), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 4, passengers: Array(2), time: 1}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 54, arrivals: 28
Elevator {state: 'Moving', direction: 'Up', floor: 4, passengers: Array(3), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 5, passengers: Array(2), time: 2}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 55, arrivals: 30
Elevator {state: 'Moving', direction: 'Up', floor: 5, passengers: Array(3), time: 1}
Elevator {state: 'Open', direction: 'Up', floor: 6, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 56, arrivals: 30
Elevator {state: 'Open', direction: 'Up', floor: 6, passengers: Array(3), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 6, passengers: Array(3), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 57, arrivals: 30
Elevator {state: 'Moving', direction: 'Up', floor: 6, passengers: Array(3), time: 0}
Elevator {state: 'Open', direction: 'Up', floor: 7, passengers: Array(3), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 58, arrivals: 30
Elevator {state: 'Open', direction: 'Up', floor: 7, passengers: Array(3), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 7, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 59, arrivals: 32
Elevator {state: 'Moving', direction: 'Up', floor: 7, passengers: Array(1), time: 0}
Elevator {state: 'Open', direction: 'Up', floor: 8, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 60, arrivals: 34
Elevator {state: 'Open', direction: 'Up', floor: 8, passengers: Array(1), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 8, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 61, arrivals: 34
Elevator {state: 'Moving', direction: 'Up', floor: 8, passengers: Array(1), time: 0}
Elevator {state: 'Open', direction: 'Up', floor: 9, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 62, arrivals: 34
Elevator {state: 'Open', direction: 'Up', floor: 9, passengers: Array(1), time: 0}
Elevator {state: 'Moving', direction: 'Up', floor: 9, passengers: Array(3), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 63, arrivals: 34
Elevator {state: 'Moving', direction: 'Up', floor: 9, passengers: Array(1), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 10, passengers: Array(3), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 64, arrivals: 34
Elevator {state: 'Open', direction: 'Down', floor: 10, passengers: Array(1), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 10, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 65, arrivals: 37
Elevator {state: 'Idle', direction: 'Down', floor: 10, passengers: Array(0), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 9, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 66, arrivals: 38
Elevator {state: 'Moving', direction: 'Down', floor: 10, passengers: Array(0), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 9, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 67, arrivals: 38
Elevator {state: 'Idle', direction: 'Down', floor: 9, passengers: Array(0), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 8, passengers: Array(2), time: 1}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 68, arrivals: 38
Elevator {state: 'Idle', direction: 'Down', floor: 9, passengers: Array(0), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 7, passengers: Array(2), time: 2}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 69, arrivals: 38
Elevator {state: 'Idle', direction: 'Down', floor: 9, passengers: Array(0), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 6, passengers: Array(2), time: 3}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 70, arrivals: 38
Elevator {state: 'Idle', direction: 'Down', floor: 9, passengers: Array(0), time: 0}
Elevator {state: 'Open', direction: 'Down', floor: 5, passengers: Array(2), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 71, arrivals: 38
Elevator {state: 'Idle', direction: 'Down', floor: 9, passengers: Array(0), time: 0}
Elevator {state: 'Moving', direction: 'Down', floor: 5, passengers: Array(1), time: 0}
Map(10) {size: 10, 1 => (0) [], 2 => (0) [], 3 => (0) [], 4 => (0) [], 5 => (0) [], …}
Time spent: 72, arrivals: 39
Elevator {state: 'Idle', direction: 'Down', floor: 9, passengers: Array(0), time: 0}
Canceled
Canceled
Time spent: 73, arrivals: 39
Canceled
Canceled
Canceled
Time spent: 74, arrivals: 39
Canceled
Canceled
Canceled
Time spent: 75, arrivals: 40
Simulation finished! Total time spent: 75 seconds!
</code></pre>