"use strict";

class Club {
    canBeEnteredBy(visitor) {
        return visitor.isSober;
    }
}

module.exports = Club;