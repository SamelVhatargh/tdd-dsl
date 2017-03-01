"use strict";

class Visitor {
    constructor(isSober) {
        this._isSober = isSober;
    }

    get isSober() {
        return this._isSober;
    }
    enter(club) {
        return club.canBeEnteredBy(this);
    }
}

module.exports = Visitor;