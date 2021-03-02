import React from 'react';
import { shallow } from 'enzyme';
import {Login} from './Login';


describe("Check login renders", () => {
    const onLoginSuccess = jest.fn();
        const manageGlobalStore = jest.fn();
    it("should render form", () => {
        const wrapper = shallow(<Login onLoginSuccess={onLoginSuccess}
            manageGlobalStore={manageGlobalStore}/>);
        const inputs = wrapper.find('form')
        expect(inputs.length).toBe(1);
    })
});

