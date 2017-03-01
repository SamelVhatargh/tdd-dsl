"use strict";

class Club {
    canBeEnteredBy(visitor) {
        return visitor.isSober && visitor.age > 18;
    }
}

module.exports = Club;