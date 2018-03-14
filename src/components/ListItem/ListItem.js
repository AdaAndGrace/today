import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import TodayText from '../TodayText/TodayText';

export default class ListItem extends React.Component {

    handleUpdateStatus = () => {
        this.props.onHandleUpdateStatus()
    };

    render() {
        return(
            <View style={styles.listItem}>
                <TouchableOpacity onPress={this.handleUpdateStatus}>
                    <TodayText style={this.props.status === 'done' ? [styles.doneItemText, styles.itemStatus] : styles.itemStatus}>{this.props.status}</TodayText>
                </TouchableOpacity>
                <View>
                    <TodayText style={this.props.status === 'done' ? [styles.doneItemText, styles.itemTitle] : styles.itemTitle}>{this.props.title}</TodayText>
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