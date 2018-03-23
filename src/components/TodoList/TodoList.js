import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-elements';
import ListItem from '../ListItem/ListItem';

export default class TodoList extends React.Component {

    handleUpdateStatus = (index) => {
        this.props.onUpdateStatus(index);
    };

    render() {
        return (
            <List containerStyle={styles.list}>
                {
                    this.props.items.map((item, index) => (
                        <ListItem key={index}
                          title={item.title}
                          tea={item.tea}
                          status={item.status}
                          category={item.category}
                          onHandleUpdateStatus={(e) => this.handleUpdateStatus(index)}/>
                    ))
                }
            </List>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        width: 360
    }
});

