import {expect} from 'chai'
import {findChar} from "../scripts/04_FindChar.js"

describe('Tests for findChar function', function() {
    
    it('should return undefined if the first parameter is not a string', function() {
        expect(findChar(123, 0)).to.be.undefined;
        expect(findChar([], 0)).to.be.undefined;
        expect(findChar({}, 0)).to.be.undefined;
        expect(findChar(null, 0)).to.be.undefined;
    });

    it('should return undefined if the second parameter is not an integer', function() {
        expect(findChar("hello", "0")).to.be.undefined;
        expect(findChar("hello", 1.5)).to.be.undefined;
        expect(findChar("hello", [])).to.be.undefined;
        expect(findChar("hello", null)).to.be.undefined;
    });

    it('should return "Incorrect index" if the index is negative', function() {
        expect(findChar("hello", -1)).to.equal("Incorrect index");
    });

    it('should return "Incorrect index" if the index is greater than or equal to the string length', function() {
        expect(findChar("hello", 5)).to.equal("Incorrect index");
        expect(findChar("hello", 10)).to.equal("Incorrect index");
    });

    it('should return the correct character when valid inputs are provided', function() {
        expect(findChar("hello", 0)).to.equal('h');
        expect(findChar("hello", 1)).to.equal('e');
        expect(findChar("hello", 4)).to.equal('o');
    });

    it('should handle an empty string correctly', function() {
        expect(findChar("", 0)).to.equal("Incorrect index");
    });
});