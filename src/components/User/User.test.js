import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

let wrapped = shallow(<User/>);

describe('User', () => {

    it('should closePopup', () => {
        wrapped.instance().onClosePopup();
        expect(wrapped.state().isShownPopUp).toEqual(false);
    });

    it('should generate cars block', () => {
        expect(wrapped.instance().renderCarField()).toBeTruthy();
    });

});