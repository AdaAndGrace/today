import React from 'react';
import {Text} from 'react-native';

export default class TodayText extends React.Component {

    render() {
        const font = {fontFamily: 'WaitingForTheSunrise'};
        const propStyles = this.props.style || {};
        style = Object.assign(propStyles, font);

        return (
            <Text style={style}>
                {this.props.children}
            </Text>
        )
    }
}