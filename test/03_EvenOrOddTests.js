import {expect} from 'chai';
import {isEvenOrOdd} from "../scripts/03_EvenOrOdd.js"

describe("Tests for isOddOrEven function", function() {
    
    it('should return undefined if the input is not a string', function() {
        expect(isEvenOrOdd(123)).to.be.undefined;
        expect(isEvenOrOdd({})).to.be.undefined;
        expect(isEvenOrOdd(null)).to.be.undefined;
        expect(isEvenOrOdd(undefined)).to.be.undefined;
        expect(isEvenOrOdd([])).to.be.undefined;
    });

    it('should return "Even" if the length of the string is even', function() {
        expect(isEvenOrOdd("test")).to.equal("Even");
        expect(isEvenOrOdd("radoslav")).to.equal("Even");
    });

    it('should return "Odd" if the length of the string is odd', function() {
        expect(isEvenOrOdd("tests")).to.equal("Odd");
        expect(isEvenOrOdd("odd")).to.equal("Odd");
    });

    it('should correctly evaluate multiple strings', function() {
        expect(isEvenOrOdd("")).to.equal("Even");
        expect(isEvenOrOdd("a")).to.equal("Odd");
        expect(isEvenOrOdd("ab")).to.equal("Even");
        expect(isEvenOrOdd("abc")).to.equal("Odd");
        expect(isEvenOrOdd("abcd")).to.equal("Even");
    });
});