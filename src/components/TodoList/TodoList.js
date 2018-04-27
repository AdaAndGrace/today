import React from 'react';
import {StyleSheet} from 'react-native';
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
import ListItem from '../ListItem/ListItem';

export default class TodoList extends React.Component {
    state = {
        refresh: true
    };

    handleUpdateStatus = (id) => {
        this.props.onUpdateStatus(id);
        this.setState(
            {
                refresh: !this.state.refresh
            }
        );
    };

    _renderItem = ({item, index}) => (
        <ListItem
            key={index}
            title={item.title}
            tea={item.tea}
            status={item.status}
            category={item.category}
            id={item.id}
            onHandleUpdateStatus={this.handleUpdateStatus}
        />
    );

    render() {
        return (
            <OptimizedFlatList
                data={this.props.items}
                extraData={this.state.refresh}
                keyExtractor={(item, index) => index}
                renderItem={this._renderItem}
                initialNumToRender={3}
            />
        );
    }
}
