import React from 'react';
import {StyleSheet} from 'react-native';
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
import ListItem from '../ListItem/ListItem';

export default class TodoList extends React.Component {
    state = {
        refresh: true
    };

    handleUpdateStatus = (item) => {
        this.props.onUpdateStatus(item.index);
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
            onHandleUpdateStatus={(e) => this.handleUpdateStatus({index})}
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

const styles = StyleSheet.create({
    list: {
        width: 360,
    }
});
