"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parrot = void 0;
class Parrot {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'parrot';
    }
}
exports.Parrot = Parrot;
