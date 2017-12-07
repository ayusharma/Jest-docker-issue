import React from 'react';
import { shallow } from 'enzyme';
import Hello from '../../src/hello';

console.error = jest.fn();

describe('<Hello /> component', () =>{
    it('should give error for the requied props', () => {
        const wrapper = shallow(<Hello />);
        expect(console.error).toBeCalled();
    })

    it('should give error for the requied props', () => {
      const wrapper = shallow(<Hello name={'Ayush'} />);
      expect(wrapper.find('div').text()).toEqual('Hello Ayush');
    });
})