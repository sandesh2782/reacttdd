import Headline from '..';
import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../../../../Utils/index';

const setUp = (props={}) => {
    // console.log('props: ', props);
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline component', ()  => {    
    
    describe('Have props ', () => {

        let wrapper;

        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test description'
            }
            wrapper = setUp(props);
        });        

        it('should render without error', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            // console.log('header', component.props().children[0].props.children);
            // console.log('desc', component.props().children[1].props.children);
            expect(component.length).toBe(1);
        });

        it('should render a header', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('should render description', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have no props', () => {
        let wrapper;

        beforeEach(() => {
            wrapper =  setUp();
        });

        it('should not render', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        });

    });

});
