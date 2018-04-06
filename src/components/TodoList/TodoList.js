import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList} from 'react-native';
import {List} from 'react-native-elements';
import ListItem from '../ListItem/ListItem';
import keyIndex from 'react-key-index';

export default class TodoList extends React.Component {
    handleUpdateStatus = (index) => {
        this.props.onUpdateStatus(index);
    };
    render() {
      const output = keyIndex(this.props.items, 1);
        return (

                <View style={{width: 'auto', marginLeft:-20, marginRight: -20}}>
                    <FlatList
                        containerStyle={styles.list}
                        data={output}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) =>
                            <ImageBackground style={{width:'auto'}} source={require('../../assets/images/grid-120.png')}>
                            <ListItem
                                title={item.title}
                                tea={item.tea}
                                status={item.status}
                                category={item.category}
                                onHandleUpdateStatus={(e) => this.handleUpdateStatus(index)}/>
                            </ImageBackground>
                        }
                    />
                </View>

        )
    }
}

const styles = StyleSheet.create({
    list: {
        width: 360,
    }
});
