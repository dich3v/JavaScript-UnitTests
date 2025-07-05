import { expect } from "chai";
import {mathEnforcer} from "../scripts/06_MathEnforcer.js"

describe('Tests for mathEnforcer', function() {

    describe('Tests for addFive function', function() {
        it('should return undefined with a non-number input', function() {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
        });

        it('should return correct result with a positive number', function() {
            expect(mathEnforcer.addFive(20)).to.equal(25);
        });

        it('should return correct result with a negative number', function() {
            expect(mathEnforcer.addFive(-15)).to.equal(-10);
        });

        it('should return correct result with a floating-point number', function() {
            expect(mathEnforcer.addFive(13.5)).to.be.closeTo(18.5, 0.01);
        });
    });

    describe('Tests for subtractTen function', function() {
        it('should return undefined with a non-number input', function() {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        });

        it('should return correct result with a positive number', function() {
            expect(mathEnforcer.subtractTen(50)).to.equal(40);
        });

        it('should return correct result with a negative number', function() {
            expect(mathEnforcer.subtractTen(-100)).to.equal(-110);
        });

        it('should return correct result with a floating-point number', function() {
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
        });
    });

    describe('Tests for sum function', function() {
        
        it('should return undefined with a non-number first input', function() {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
            expect(mathEnforcer.sum({}, 5)).to.be.undefined;
            expect(mathEnforcer.sum(null, 5)).to.be.undefined;
        });

        it('should return undefined with a non-number second input', function() {
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
            expect(mathEnforcer.sum(5, [])).to.be.undefined;
            expect(mathEnforcer.sum(5, {})).to.be.undefined;
            expect(mathEnforcer.sum(5, null)).to.be.undefined;
        });

        it('should return correct sum with two positive numbers', function() {
            expect(mathEnforcer.sum(55, 10)).to.equal(65);
        });

        it('should return correct sum with two negative numbers', function() {
            expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
        });

        it('should return correct sum with a positive and a negative number', function() {
            expect(mathEnforcer.sum(11, -6)).to.equal(5);
        });

        it('should return correct sum with two floating-point numbers', function() {
            expect(mathEnforcer.sum(5.5, 4.5)).to.be.closeTo(10.0, 0.01);
        });
    });
});