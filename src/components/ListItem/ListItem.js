import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import TodayText from '../TodayText/TodayText';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../../config.json';
const Icon = createIconSetFromFontello(fontelloConfig, 'today');

export default class ListItem extends React.Component {

    handleUpdateStatus = () => {
        this.props.onHandleUpdateStatus()
    };

    render() {
        return(
            <View style={styles.listItem}>
                <TouchableOpacity onPress={this.handleUpdateStatus}>
                    <Icon name={this.props.status} size={22} color="#ccc" />
                </TouchableOpacity>
                <View>
                    <TodayText style={(this.props.status === 'task-completed' || this.props.status === 'appointment-completed' || this.props.status === 'event-completed') ? [styles.doneItemText, styles.itemTitle] : styles.itemTitle}>{this.props.title}</TodayText>
                </View>
            </View>
        )
    }
}


const fontSize = 24;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
    },
    itemTitle: {
        fontSize:fontSize
    },
    itemStatus: {
        fontSize:fontSize,
        paddingRight: 20
    },
    doneItemText: {
        color: '#aaa',
        textDecorationLine: 'line-through'
    }
});