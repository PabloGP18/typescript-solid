// Encapsulation

class HumanEncapsulation{
    private _nationality: string | undefined;
    private _skinColor: string | undefined;
    private _hairColor: string | undefined;


    get nationality(): string | undefined {
        return this._nationality;
    }

    set nationality(value: string | undefined) {
        this._nationality = value;
    }

    get skinColor(): string | undefined {
        return this._skinColor;
    }

    set skinColor(value: string | undefined) {
        this._skinColor = value;
    }

    get hairColor(): string | undefined {
        return this._hairColor;
    }

    set hairColor(value: string | undefined) {
        this._hairColor = value;
    }

    public credentials(): string {
        return `his nationality is ${this._nationality}, skin color is ${this._skinColor} and hair color is ${this._hairColor}`;
    }
}

let humanEnc = new HumanEncapsulation()
humanEnc.credentials();
humanEnc.nationality = 'spanish';
humanEnc.skinColor = 'white';
humanEnc.hairColor = 'brown'
console.log(humanEnc.credentials())

// abstraction

class HumanAbstraction{
    private _nationality: string | undefined;
    private _skinColor: string | undefined;
    private _hairColor: string | undefined;


    get nationality(): string | undefined {
        return this._nationality;
    }

    set nationality(value: string | undefined) {
        this._nationality = value;
    }

    get skinColor(): string | undefined {
        return this._skinColor;
    }

    set skinColor(value: string | undefined) {
        this._skinColor = value;
    }

    get hairColor(): string | undefined {
        return this._hairColor;
    }

    set hairColor(value: string | undefined) {
        this._hairColor = value;
    }

    private credentials(): string {
        return `his nationality is ${this._nationality}, skin color is ${this._skinColor} and hair color is ${this._hairColor}`;
    }

    public sayCredentials(): string {
        return this.credentials();
    }
}

let humanAbs = new HumanAbstraction()
humanAbs.sayCredentials()
humanAbs.nationality = 'spanish';
humanAbs.skinColor = 'white';
humanAbs.hairColor = 'brown'
console.log(humanAbs.sayCredentials())

// abstraction with constructor

class HumanAbstractionConstructor{
    private _nationality: string | undefined;
    private _skinColor: string | undefined;
    private _hairColor: string | undefined;

    constructor(nationality: string | undefined, skinColor: string | undefined, hairColor: string | undefined) {
        this._nationality = nationality;
        this._skinColor = skinColor;
        this._hairColor = hairColor;
    }

    get nationality(): string | undefined {
        return this._nationality;
    }

    set nationality(value: string | undefined) {
        this._nationality = value;
    }

    get skinColor(): string | undefined {
        return this._skinColor;
    }

    set skinColor(value: string | undefined) {
        this._skinColor = value;
    }

    get hairColor(): string | undefined {
        return this._hairColor;
    }

    set hairColor(value: string | undefined) {
        this._hairColor = value;
    }

    private credentials(): string {
        return `his nationality is ${this._nationality}, skin color is ${this._skinColor} and hair color is ${this._hairColor}`;
    }

    public sayCredentials(): string {
        return this.credentials();
    }
}

let humanAbsCons = new HumanAbstractionConstructor('spanish', 'white', 'brown');
humanAbsCons.sayCredentials()
console.log(humanAbsCons.sayCredentials())

// inheritance

class HumanInheritance{
    protected _nationality: string | undefined;
    protected _skinColor: string | undefined;
    protected _hairColor: string | undefined;

    constructor(nationality: string | undefined, skinColor: string | undefined, hairColor: string | undefined) {
        this._nationality = nationality;
        this._skinColor = skinColor;
        this._hairColor = hairColor;
    }

    get nationality(): string | undefined {
        return this._nationality;
    }

    set nationality(value: string | undefined) {
        this._nationality = value;
    }

    get skinColor(): string | undefined {
        return this._skinColor;
    }

    set skinColor(value: string | undefined) {
        this._skinColor = value;
    }

    get hairColor(): string | undefined {
        return this._hairColor;
    }

    set hairColor(value: string | undefined) {
        this._hairColor = value;
    }

    credentials(): string {
        return `his nationality is ${this._nationality}, skin color is ${this._skinColor} and hair color is ${this._hairColor}`;
    }
}

class Person1 extends HumanInheritance{

    private _firstName: string | undefined;
    private _lastName: string | undefined;
    private _age: number | undefined;

    constructor(nationality: string | undefined, skinColor: string | undefined, hairColor: string | undefined, firstName: string | undefined, lastName: string | undefined, age: number | undefined) {
        super(nationality, skinColor, hairColor);
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }


    get firstName(): string | undefined {
        return this._firstName;
    }

    set firstName(value: string | undefined) {
        this._firstName = value;
    }

    get lastName(): string | undefined {
        return this._lastName;
    }

    set lastName(value: string | undefined) {
        this._lastName = value;
    }

    get age(): number | undefined {
        return this._age;
    }

    set age(value: number | undefined) {
        this._age = value;
    }
    greeting(): string {
        return "hola buenas tardes "
    }

    iAm (){
        return `name is ${this.firstName} ${this.lastName} and ${this.age} years old`;
    }
}

class person2 extends HumanInheritance{
    private _firstName: string | undefined;
    private _lastName: string | undefined;
    private _age: number | undefined;

    constructor(nationality: string | undefined, skinColor: string | undefined, hairColor: string | undefined, firstName: string | undefined, lastName: string | undefined, age: number | undefined) {
        super(nationality, skinColor, hairColor);
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }


    get firstName(): string | undefined {
        return this._firstName;
    }

    set firstName(value: string | undefined) {
        this._firstName = value;
    }

    get lastName(): string | undefined {
        return this._lastName;
    }

    set lastName(value: string | undefined) {
        this._lastName = value;
    }

    get age(): number | undefined {
        return this._age;
    }

    set age(value: number | undefined) {
        this._age = value;
    }
    greeting(): string {
        return "hallo goedemiddag"
    }

    iAm (){
        return `name is ${this.firstName} ${this.lastName} and ${this.age} years old`;
    }
}


let humanInher = new HumanInheritance('spanish', 'white', 'brown');
let pablo = new Person1('spanish', 'white', 'brown','Pablo','Garcia', 34);
let ble = new Person1('bleble', 'blo', 'bla','ble','leble', 35);
let john = new person2('american', 'white', 'blond','John','Beton', 30);

pablo.iAm()
pablo.credentials()
humanInher.credentials()


console.log(`${pablo.credentials()} and his ${pablo.iAm()}`)
console.log(`${ble.credentials()} and his ${ble.iAm()}`)

//polymorphism

let message = [pablo,john]

message.forEach(function (greetings){
    console.log(greetings.greeting())
})



