import {expect} from 'chai'
import {isSymmetric} from '../scripts/02_SymmetryCheck.js'

describe("SymmetryCheck function tests", function(){

    it("should return true for symmetric array", function(){
        let result = isSymmetric([1,2,3,2,1]);

        expect(result).to.be.true;
    });

    it("should return false for non-symmetric array", function(){
        let result = isSymmetric([1,2,3,5,1]);

        expect(result).to.be.false;
    });

    it("should return true for empty array", function(){
        let result = isSymmetric([]);

        expect(result).to.be.true;
    });

    it("should return false for non-array", function(){
        let result = isSymmetric('this is not array');

        expect(result).to.be.false;
    });

    it("should return false for non-number elements", function(){
        let result = isSymmetric([1, '1']);

        expect(result).to.be.false;
    });

    it("should return true for single element array", function(){
        let result = isSymmetric([1]);

        expect(result).to.be.true;
    });

    it("should return false for object input", function(){
        let result = isSymmetric({0:1, 1:2, 2:1});

        expect(result).to.be.false;
    });

    it("should return false for number input", function(){
        let result = isSymmetric(12321);

        expect(result).to.be.false;
    });
});