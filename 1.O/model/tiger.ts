import {Animal} from "./animal";

export class Tiger implements Animal {
    private _name: any;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'Tiger';
    }

    public makeSound(){
        return 'GRRRRRRRRrrrrrrrrrrrrrrrrrrrrRRR'
    }

}