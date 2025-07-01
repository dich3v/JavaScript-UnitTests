import {expect} from 'chai';
import { analyzeArray } from '../scripts/05_ArrayAnalyzer.js';

describe('Tests for analyzeArray function', function() {
    
    it('should return undefined if the input is not an array, empty or contains non-number elements', function() {
        expect(analyzeArray(123)).to.be.undefined;
        expect(analyzeArray('string')).to.be.undefined;
        expect(analyzeArray({})).to.be.undefined;
        expect(analyzeArray(null)).to.be.undefined;
        expect(analyzeArray([])).to.be.undefined;
        expect(analyzeArray([1, 2, 'string', 4])).to.be.undefined;
        expect(analyzeArray([1, true, 3, 4])).to.be.undefined;
        expect(analyzeArray([{}, 2, 3])).to.be.undefined;
    });

    it('should return correct object with correct inputs', function() {
        expect(analyzeArray([1, 2, 3, 4, 5])).to.deep.equal({ min: 1, max: 5, length: 5 });
        expect(analyzeArray([-5, -10, 0, 5])).to.deep.equal({ min: -10, max: 5, length: 4 });
    });

    it('should return correct object for an array with a single element', function() {
        expect(analyzeArray([7])).to.deep.equal({ min: 7, max: 7, length: 1 });
    });

    it('should return correct object for an array with all equal elements', function() {
        expect(analyzeArray([3, 3, 3, 3])).to.deep.equal({ min: 3, max: 3, length: 4 });
    });

    it('should return correct object for an array with floating-point numbers', function() {
        expect(analyzeArray([1.1, 2.2, 3.3])).to.deep.equal({ min: 1.1, max: 3.3, length: 3 });
    });
});