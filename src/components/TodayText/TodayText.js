import React from 'react';
import {Text} from 'react-native';

export default class TodayText extends React.Component {

    render() {
        return (
            <Text style={this.props.style}>
                <Text style={{fontFamily:'WaitingForTheSunrise'}}>
                    {this.props.children}
                </Text>
            </Text>
        )
    }
}