import React from 'react';
import {Text} from 'react-native';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../../config.json';
const Icon = createIconSetFromFontello(fontelloConfig, 'today');

export default class HelloText extends React.Component {

    render() {
        const font = {fontFamily: 'today'};
        const propStyles = this.props.style || {};
        style = Object.assign(propStyles, font);

        return (
            <Text style={style}>
                {this.props.children}
                <Icon name="task" size={22} color="#000" />
                <Icon name="task-completed" size={22} color="#000" />
                <Icon name="task-migrated" size={22} color="#000" />
                <Icon name="task-cancelled" size={22} color="#000" />
                <Icon name="appointment" size={22} color="#000" />
                <Icon name="appointment-completed" size={22} color="#000" />
                <Icon name="appointment-migrated" size={22} color="#000" />
                <Icon name="appointment-cancelled" size={22} color="#000" />
                <Icon name="event" size={22} color="#000" />
                <Icon name="event-completed" size={22} color="#000" />
                <Icon name="event-migrated" size={22} color="#000" />
                <Icon name="event-cancelled" size={22} color="#000" />
                <Icon name="deadline" size={22} color="#000" />
                <Icon name="expenses" size={22} color="#000" />
                <Icon name="idea" size={22} color="#000" />
                <Icon name="important" size={22} color="#000" />
                <Icon name="inspiration" size={22} color="#000" />
                <Icon name="question" size={22} color="#000" />
                <Icon name="notes" size={22} color="#000" />
            </Text>
        )
    }
}