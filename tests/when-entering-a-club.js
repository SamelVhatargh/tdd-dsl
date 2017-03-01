"use strict";
let assert = require('chai').assert;
let VisitorBuilder = require('./visitor-builder');
let Club = require('../src/club');

suite('when entering a club', function () {

    function createClub(owner) {
        return new Club(owner);
    }

    test("drunk visitors can't enter club", function() {
        let visitor = new VisitorBuilder()
            .setSober(false)
            .build();
        let club = createClub();

        let visitorEnteredClub = visitor.enter(club);

        assert.equal(visitorEnteredClub, false);
    });

    test("non-adult visitors can't enter club", function() {
        let visitor = new VisitorBuilder()
            .setAge(14)
            .build();
        let club = createClub();

        let visitorEnteredClub = visitor.enter(club);

        assert.equal(visitorEnteredClub, false);
    });

    test("non-adult drunk visitor can enter club if that club belongs to his father", function() {
        let sonOfJohn = new VisitorBuilder()
            .setAge(14)
            .setSober(false)
            .setParent('John')
            .build();
        let johnsClub = createClub('John');

        let sonOfJohnEnteredClub = sonOfJohn.enter(johnsClub);

        assert.equal(sonOfJohnEnteredClub, true);
    });

});
