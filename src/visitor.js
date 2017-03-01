"use strict";

class Visitor {
    constructor(isSober, age) {
        this._isSober = isSober;
        this._age = age;
    }

    get isSober() {
        return this._isSober;
    }

    get age() {
        return this._age;
    }

    enter(club) {
        return club.canBeEnteredBy(this);
    }
}

module.exports = Visitor;