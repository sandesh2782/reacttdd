import Header from '../index';
import { shallow } from 'enzyme';
import React from 'react';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('Header component', ()  => {
    
    it('should have jumbotron image', () => {
        expect(wrapper.find('img').length).toEqual(1);
    });

    it('should have a site label named as `My app`', () => {
        expect(wrapper.find('label').text()).toEqual('My app');
    });  

});
