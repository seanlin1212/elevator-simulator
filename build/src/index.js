"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const simulator_1 = require("./simulator");
main();
// TODO: more examples
function main() {
    const simulator = new simulator_1.Simulator();
    simulator.init();
    simulator.start();
}
exports.main = main;
//# sourceMappingURL=index.js.map