import {expect} from 'chai';
import {sum} from '../scripts/01_SumNumbers.js';

describe("Sum function tests", function() {
    
    it("should return the sum of an array of numbers", function() {
        
        let input = [1, 2, 3];
        let result = sum(input);

        expect(result).to.equal(6);
    })

    it("should return the sum of an array as a string", function() {

        let input = ['1', '2', '3'];
        let result = sum(input);

        expect(result).to.equal(6);
    })

    it("should return 0 when pass an empty array", function() {

        let input = [];
        let result = sum(input);

        expect(result).to.equal(0);
    })

    it("should return correct sum when pass negative numbers", function() {

        let input = [-1, -2, -3];
        let result = sum(input);

        expect(result).to.equal(-6);
    })

    it("should return correct sum when pass mixed input", function() {

        let input = [1, '2', 3];
        let result = sum(input);

        expect(result).to.equal(6);
    })

    it("should return correct sum when pass chars as input", function() {

        let input = ['a', 'b', 'a'];
        let result = sum(input);

        expect(result).to.be.NaN;
    })
    it("should return NaN if array contains undefined or null", function() {

        let input = [1, undefined, 2];
        let result = sum(input);

        expect(result).to.be.NaN;
    })
})