"use strict";

class Visitor {
    constructor(isSober, age, parent) {
        this._isSober = isSober;
        this._age = age;
        this._parent = parent;
    }

    get isSober() {
        return this._isSober;
    }

    get age() {
        return this._age;
    }

    get parent() {
        return this._parent;
    }

    enter(club) {
        return club.canBeEnteredBy(this);
    }
}

module.exports = Visitor;