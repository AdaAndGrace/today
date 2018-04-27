import React from 'react';
import App from './App';

import TestRenderer from 'react-test-renderer';

it('renders without crashing', () => {
    const wrapper = TestRenderer.create(<App/>).toJSON();
    console.log(wrapper);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
});
