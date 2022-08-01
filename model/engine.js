"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
class Engine {
    constructor() {
        this._engineStatus = false;
    }
    get engineStatus() {
        return this._engineStatus;
    }
    turnEngineOn() {
        this._engineStatus = true;
    }
    turnEngineOff() {
        this._engineStatus = false;
    }
}
exports.Engine = Engine;
