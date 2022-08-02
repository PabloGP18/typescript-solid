import {Animal} from "./animal";

export class Parrot implements Animal{
    private _name: any;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }
    public makeSound(){
        return 'ik wil een coooookieeee'
    }
}
