import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const wrapper = renderer.create(<App/>).toJSON();
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
});