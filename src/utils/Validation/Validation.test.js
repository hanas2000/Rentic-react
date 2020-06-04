import React from 'react';
import Validation from './Validation';

const wrapped = new Validation();

describe('Validation', () => {
    it('correct email validation', () => {
        expect(wrapped.checkEmail('hanas')).toEqual(false);
        expect(wrapped.checkEmail('hanas@gmail.com')).toEqual(true);
    });
    it('correct max length validation', () => {
        expect(wrapped.checkMaxLength('hello',3)).toEqual(false);
        expect(wrapped.checkMaxLength('hel',4)).toEqual(true);
    });
    it('correct max length validation', () => {
        expect(wrapped.checkMinLength('he',3)).toEqual(false);
        expect(wrapped.checkMinLength('hello',4)).toEqual(true);
    });
    it('correct password validation', () => {
        expect(wrapped.checkPasswordSymbols('hello')).toEqual(true);
        expect(wrapped.checkPasswordSymbols('/hello')).toEqual(false);
    });
    it('correct minimum number', () => {
        expect(wrapped.checkMinNumber(10,1)).toEqual(true);
        expect(wrapped.checkMinNumber(10,11)).toEqual(false);
    });
    it('correct max number', () => {
        expect(wrapped.checkMaxNumber(10,11)).toEqual(true);
        expect(wrapped.checkMaxNumber(10,5)).toEqual(false);
    });
    it('correct minimum count of digits', () => {
        expect(wrapped.checkMinCountDigits('hello20',2)).toEqual(true);
        expect(wrapped.checkMinCountDigits('hello',1)).toEqual(false);
    });
});