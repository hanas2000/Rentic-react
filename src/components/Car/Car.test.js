import React from 'react';
import { shallow } from 'enzyme';
import Car from './Car';

let wrapped = shallow(<Car/>);

describe('Car', () => {

    it('should generate cars block', () => {
        expect(wrapped.instance().renderCars()).toBeTruthy();
    });

});