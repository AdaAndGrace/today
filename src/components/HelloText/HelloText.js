import React from 'react';
import {Text} from 'react-native';

export default class HelloText extends React.Component {

    render() {
        const font = {fontFamily: 'today'};
        const propStyles = this.props.style || {};
        style = Object.assign(propStyles, font);

        return (
            <Text style={style}>
                {this.props.children}
            </Text>
        )
    }
}