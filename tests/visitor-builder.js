"use strict";

var Visitor = require('../src/visitor');

class VisitorBuilder {
    constructor() {
        this._isSober = true;
        this._age = 18;
        this._parent = 'alex';
    }

    setSober(isSober) {
        this._isSober = isSober;
        return this;
    }

    setAge(age) {
        this._age = age;
        return this;
    }

    setParent(name) {
        this._parent = name;
        return this;
    }

    build() {
        return new Visitor(this._isSober, this._age, this._parent);
    }
}

module.exports = VisitorBuilder;