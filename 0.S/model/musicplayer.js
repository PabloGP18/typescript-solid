"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPlayer = void 0;
class MusicPlayer {
    constructor() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    get musicLevel() {
        return this._musicLevel;
    }
    set musicLevel(value) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnMusicOff() {
        this._musicLevel = 0;
    }
}
exports.MusicPlayer = MusicPlayer;
