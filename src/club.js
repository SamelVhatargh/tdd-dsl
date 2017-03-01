"use strict";

class Club {
    constructor(owner) {
        this._owner = owner;
    }

    canBeEnteredBy(visitor) {
        return this._owner === visitor.parent || visitor.isSober && visitor.age > 18;
    }
}

module.exports = Club;