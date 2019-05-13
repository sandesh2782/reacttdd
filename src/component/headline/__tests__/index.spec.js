import Headline from '..';
import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr, checkProps } from '../../../../Utils/index';

const setUp = (props={}) => {
    // console.log('props: ', props);
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline component', ()  => {    

    describe('Checking PropTypes', () => {

        it('should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [
                    {
                        fName: 'Test fName',
                        lName: 'Test lName',
                        email: 'test@exmaple.com',
                        age: 24,
                        onlineStatus: false
                    }
                ]
            };

            const propsErr = checkProps(Headline, expectedProps);

            expect(propsErr).toBeUndefined();
        });

    });
    
    //If component is having props
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

    //If component is having no props
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
