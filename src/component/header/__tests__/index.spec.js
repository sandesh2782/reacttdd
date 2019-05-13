import Header from '..';
import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../../../../Utils/index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header component', ()  => {

    let component;

    beforeEach(() => {
        component = setUp();
    });    
    
    it('should render without error', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should have jumbotron image', () => {
        const wrapper = findByTestAttr(component, 'logoIMG');
        expect(wrapper.length).toBe(1);
    });    

    it('should have a site label named as `My app`', () => {
        expect(component.find('.siteLabel').text()).toEqual('My app');
    });  

});
