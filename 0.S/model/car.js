"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const engine_1 = require("./engine");
const musicplayer_1 = require("./musicplayer");
const fuelTank_1 = require("./fuelTank");
class Car {
    constructor() {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._miles = 0;
        //By changing this variable to readonly I have in essence created a property constant.
        // the only subtle difference is that you can write once to the variable inside the constructor
        this.FUEL_MILEAGE = 10;
        this._engine = new engine_1.Engine();
        this._musicPlayer = new musicplayer_1.MusicPlayer();
        this._fuelTank = new fuelTank_1.FuelTank(100);
    }
    get engine() {
        return this._engine;
    }
    get musicPlayer() {
        return this._musicPlayer;
    }
    get fuelTank() {
        return this._fuelTank;
    }
    get miles() {
        return this._miles;
    }
    //Take attention to these getter and setters
    drive() {
        if (this._engine.engineStatus === false || this._fuelTank.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._fuelTank.consumeFuel();
        this._miles += this.FUEL_MILEAGE;
    }
}
exports.Car = Car;
