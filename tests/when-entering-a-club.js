"use strict";
let assert = require('chai').assert;
let VisitorBuilder = require('./visitor-builder');
let Club = require('../src/club');

suite('when entering a club', function () {

    test("drunk visitors can't enter club", function() {
        let visitor = new VisitorBuilder()
            .setSober(false)
            .build();
        let club = new Club();

        let visitorEnteredClub = visitor.enter(club);

        assert.equal(visitorEnteredClub, false);
    });

    test("non-adult visitors can't enter club", function() {
        let visitor = new VisitorBuilder()
            .setAge(14)
            .build();
        let club = new Club();

        let visitorEnteredClub = visitor.enter(club);

        assert.equal(visitorEnteredClub, false);
    });

});
