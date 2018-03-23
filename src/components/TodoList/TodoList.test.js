import React from 'react';
import TodoList from './TodoList';

import renderer from 'react-test-renderer';

const list = [
    {
        title: 'Take out the trash',
        tea: 'task',
        done: false,
        status: 'completed'
    },
    {
        title: 'March for Our Lives',
        tea: 'event',
        done: false,
        status: 'todo',
        category: 'important'
    },
    {
        title: 'Call Amy',
        tea: 'task',
        done: false,
        status: 'todo',
        category: 'inspiration'
    },
    {
        title: 'A really big idea that wraps lines',
        category: 'idea'
    }
    ]


it('renders without crashing', () => {
    const wrapper = renderer.create(<TodoList items={list}/>).toJSON();
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
});

