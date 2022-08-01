"use strict";
// Encapsulation
class HumanEncapsulation {
    get nationality() {
        return this._nationality;
    }
    set nationality(value) {
        this._nationality = value;
    }
    get skinColor() {
        return this._skinColor;
    }
    set skinColor(value) {
        this._skinColor = value;
    }
    get hairColor() {
        return this._hairColor;
    }
    set hairColor(value) {
        this._hairColor = value;
    }
    credentials() {
        return `his nationality is ${this._nationality}, skin color is ${this._skinColor} and hair color is ${this._hairColor}`;
    }
}
let humanEnc = new HumanEncapsulation();
humanEnc.credentials();
humanEnc.nationality = 'spanish';
humanEnc.skinColor = 'white';
humanEnc.hairColor = 'brown';
console.log(humanEnc.credentials());
// abstraction
class HumanAbstraction {
    get nationality() {
        return this._nationality;
    }
    set nationality(value) {
        this._nationality = value;
    }
    get skinColor() {
        return this._skinColor;
    }
    set skinColor(value) {
        this._skinColor = value;
    }
    get hairColor() {
        return this._hairColor;
    }
    set hairColor(value) {
        this._hairColor = value;
    }
    credentials() {
        return `his nationality is ${this._nationality}, skin color is ${this._skinColor} and hair color is ${this._hairColor}`;
    }
    sayCredentials() {
        return this.credentials();
    }
}
let humanAbs = new HumanAbstraction();
humanAbs.sayCredentials();
humanAbs.nationality = 'spanish';
humanAbs.skinColor = 'white';
humanAbs.hairColor = 'brown';
console.log(humanAbs.sayCredentials());
// abstraction with constructor
class HumanAbstractionConstructor {
    constructor(nationality, skinColor, hairColor) {
        this._nationality = nationality;
        this._skinColor = skinColor;
        this._hairColor = hairColor;
    }
    get nationality() {
        return this._nationality;
    }
    set nationality(value) {
        this._nationality = value;
    }
    get skinColor() {
        return this._skinColor;
    }
    set skinColor(value) {
        this._skinColor = value;
    }
    get hairColor() {
        return this._hairColor;
    }
    set hairColor(value) {
        this._hairColor = value;
    }
    credentials() {
        return `his nationality is ${this._nationality}, skin color is ${this._skinColor} and hair color is ${this._hairColor}`;
    }
    sayCredentials() {
        return this.credentials();
    }
}
let humanAbsCons = new HumanAbstractionConstructor('spanish', 'white', 'brown');
humanAbsCons.sayCredentials();
console.log(humanAbsCons.sayCredentials());
// inheritance
class HumanInheritance {
    constructor(nationality, skinColor, hairColor) {
        this._nationality = nationality;
        this._skinColor = skinColor;
        this._hairColor = hairColor;
    }
    get nationality() {
        return this._nationality;
    }
    set nationality(value) {
        this._nationality = value;
    }
    get skinColor() {
        return this._skinColor;
    }
    set skinColor(value) {
        this._skinColor = value;
    }
    get hairColor() {
        return this._hairColor;
    }
    set hairColor(value) {
        this._hairColor = value;
    }
    credentials() {
        return `his nationality is ${this._nationality}, skin color is ${this._skinColor} and hair color is ${this._hairColor}`;
    }
}
class Person1 extends HumanInheritance {
    constructor(nationality, skinColor, hairColor, firstName, lastName, age) {
        super(nationality, skinColor, hairColor);
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    greeting() {
        return "hola buenas tardes ";
    }
    iAm() {
        return `name is ${this.firstName} ${this.lastName} and ${this.age} years old`;
    }
}
class person2 extends HumanInheritance {
    constructor(nationality, skinColor, hairColor, firstName, lastName, age) {
        super(nationality, skinColor, hairColor);
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    greeting() {
        return "hallo goedemiddag";
    }
    iAm() {
        return `name is ${this.firstName} ${this.lastName} and ${this.age} years old`;
    }
}
let humanInher = new HumanInheritance('spanish', 'white', 'brown');
let pablo = new Person1('spanish', 'white', 'brown', 'Pablo', 'Garcia', 34);
let ble = new Person1('bleble', 'blo', 'bla', 'ble', 'leble', 35);
let john = new person2('american', 'white', 'blond', 'John', 'Beton', 30);
pablo.iAm();
pablo.credentials();
humanInher.credentials();
console.log(`${pablo.credentials()} and his ${pablo.iAm()}`);
console.log(`${ble.credentials()} and his ${ble.iAm()}`);
//polymorphism
let message = [pablo, john];
message.forEach(function (greetings) {
    console.log(greetings.greeting());
});
