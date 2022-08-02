import {Animal} from "./animal";

export class Cat implements Animal {
    private _name: any;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }
    public makeSound(): string {
        return 'miauw miauw'
    }
}