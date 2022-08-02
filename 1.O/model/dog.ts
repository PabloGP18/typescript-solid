import {Animal} from "./animal";

export class Dog implements Animal {
    private _name: any;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }

    public makeSound(){
      return 'wuaf wuaf'
    }

}
