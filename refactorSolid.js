"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./model/car");
const engine_1 = require("./model/engine");
const musicplayer_1 = require("./model/musicplayer");
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>
const musicToggleElement = document.querySelector('#music-toggle');
const musicSliderElement = document.querySelector('#music-slider');
const engineToggleElement = document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = document.querySelector('#add-fuel-input');
const fuelLevelElement = document.querySelector('#fuel-level');
const milesElement = document.querySelector('#miles-value');
const audioElement = document.querySelector('#car-music');
let car = new car_1.Car();
let musicPlayer = new musicplayer_1.MusicPlayer();
let engine = new engine_1.Engine(100);
musicToggleElement.addEventListener('click', () => {
    if (musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    musicPlayer.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', (event) => {
    let target = (event.target);
    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', () => {
    if (engine.engineStatus) {
        engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();
    engine.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = engine.fuel.toString();
});
setInterval(() => {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = engine.fuel.toString();
    if (musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
