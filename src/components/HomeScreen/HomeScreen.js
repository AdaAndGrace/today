import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import TodoList from '../TodoList/TodoList';
import TodayText from '../TodayText/TodayText';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <View>
                    <TodayText h2 style={{fontSize: 56}}>Today!</TodayText>
                    <TodoList items={this.props.list} onUpdateStatus={this.props.handleUpdateStatus}/>
                    <Icon
                        name='add-circle'
                        color='#f50'
                        size={60}
                        onPress={() => this.props.handleAddItem('TODO: pop a modal to capture new item.  also, style this button plz')}/>
                </View>
            </React.Fragment>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40,
    }
});