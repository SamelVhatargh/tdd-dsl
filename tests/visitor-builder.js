"use strict";

var Visitor = require('../src/visitor');

class VisitorBuilder {
    constructor() {
        this._isSober = true;
    }

    setSober(isSober) {
        this._isSober = isSober;
        return this;
    }

    build() {
        return new Visitor(this._isSober);
    }
}

module.exports = VisitorBuilder;