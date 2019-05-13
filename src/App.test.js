import App from './App';
import { shallow } from 'enzyme';
import React from 'react';
import Header from './component/header';
import Headline from './component/headline';

const setUp = () => {
    const wrapper = shallow(<App />);
    return wrapper;
};

describe('App Component', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = setUp();
    });

    it('should render without errors', () => {
        expect(wrapper.find('.App').length).toBe(1);
    });

    it('should render Header component', () => {
        expect(shallow(<Header/>).length).toBe(1);
    });

    it('should render Headline component', () => {
        expect(shallow(<Headline/>).length).toBe(1);
    });

    

});