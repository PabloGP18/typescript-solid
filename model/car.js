"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const engine_1 = require("./engine");
class Car {
    constructor() {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._miles = 0;
        //By changing this variable to readonly I have in essence created a property constant.
        // the only subtle difference is that you can write once to the variable inside the constructor
        this.FUEL_MILEAGE = 10;
        this._engine = new engine_1.Engine(100);
    }
    get miles() {
        return this._miles;
    }
    //Take attention to these getter and setters
    drive() {
        if (this._engine.engineStatus === false || this._engine.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._engine.consumeFuel();
        this._miles += this.FUEL_MILEAGE;
    }
}
exports.Car = Car;
