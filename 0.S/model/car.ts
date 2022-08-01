import {Engine} from "./engine";
import {MusicPlayer} from "./musicplayer";
import {FuelTank} from "./fuelTank";

export class Car {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
    private _miles : number = 0;
    private _engine: Engine;
    private _musicPlayer: MusicPlayer;
    private _fuelTank: FuelTank;

    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly FUEL_MILEAGE: number = 10;

    constructor() {
        this._engine = new Engine();
        this._musicPlayer = new MusicPlayer();
        this._fuelTank = new FuelTank(100);
    }


    get engine(): Engine {
        return this._engine;
    }

    get musicPlayer(): MusicPlayer {
        return this._musicPlayer;
    }

    get fuelTank(): FuelTank {
        return this._fuelTank;
    }

    get miles(): number {
        return this._miles;
    }

//Take attention to these getter and setters



    drive() {
        if(this._engine.engineStatus === false || this._fuelTank.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this._fuelTank.consumeFuel();
        this._miles += this.FUEL_MILEAGE;
    }


}
