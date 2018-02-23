import React from 'react';
import TodoList from './TodoList';

import renderer from 'react-test-renderer';

const list = [
    {
        title: 'Take out the trash',
        done: true
    },
    {
        title: 'Buy Coffee',
        done: false
    },
    {
        title: 'Call Amy',
        done: false
    }
    ]


it('renders without crashing', () => {
    const wrapper = renderer.create(<TodoList items={list}/>).toJSON();
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
});

it('renders an item for each item in items list', () => {
    const wrapper = renderer.create(<TodoList items={list}/>).toJSON();
    expect(wrapper.find(ListItem)).to.have.length(1);
});
