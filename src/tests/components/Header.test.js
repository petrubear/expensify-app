/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';


test('should render Header', () => {
    const wrapper = shallow(<Header startLogout={() => {
    }}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on click', () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogoutSpy}/>);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenCalled();
});
