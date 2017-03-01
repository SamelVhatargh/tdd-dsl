"use strict";

var Visitor = require('../src/visitor');

class VisitorBuilder {
    constructor() {
        this._isSober = true;
        this._age = 18;
    }

    setSober(isSober) {
        this._isSober = isSober;
        return this;
    }

    setAge(age) {
        this._age = age;
        return this;
    }

    build() {
        return new Visitor(this._isSober, this._age);
    }
}

module.exports = VisitorBuilder;