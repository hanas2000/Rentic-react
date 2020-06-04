import React from 'react';
import { shallow } from 'enzyme';
import CarNode from './CarNode';

const index = 1;
const car={
    id: 1,
    user: null,
    name: "Audi Q7",
    photo: "https://rentik.s3.eu-north-1.amazonaws.com/car/1_photo",
    carNumber: "BC2563BB",
    price: 1000,
    features: [
        {
            name: "Petrol"
        },
        {
            name: "Audio system with 10 speakers"
        },
        {
            name: "Bluetooth interface"
        },
        {
            name: "Automatic"
        },
        {
            name: "Air Con"
        },
        {
            name: "5 Doors"
        }
    ],
    content: "Stylish and agile German Audi Q7 is available in many colors."
};
const dateFrom="20.05.2020";
const dateTo="30.05.2020";
const dropOff="Lviv";
const pickUp="Lviv";
let wrapped = shallow(<CarNode key={index}
                               car={car}
                               dateFrom={dateFrom}
                               dateTo={dateTo}
                               dropOff={dropOff}
                               pickUp={pickUp}/>);

describe('CarNode', () => {
    it('right price', () => {
        expect(wrapped.find('h5').text()).toEqual("Price: " + car.price + "$");
    })
    it('right car name', () => {
        expect(wrapped.find('h2').text()).toEqual(car.name);
    })
    it('should generate cars block', () => {
        expect(wrapped.instance().renderFeatures()).toBeTruthy();
    });
});