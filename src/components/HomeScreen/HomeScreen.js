import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import TodoList from '../TodoList/TodoList';
import TodayText from '../TodayText/TodayText';


//TODO this is just temporary for development
import listData from '../../assets/mockData.json';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
           display:'none'
        }
    };

    state = {
        list: listData.list
    };

    handleUpdateStatus = (index) => {
        let list = this.state.list;
        let newStatus;

        switch(list[index].status) {
            case 'todo':
                newStatus = 'completed';
                break;
            case 'completed':
                newStatus = 'migrated';
                break;
            case 'migrated':
                newStatus = 'cancelled';
                break;
            case 'cancelled':
                newStatus = 'todo';
                break;
            default:
                newStatus = 'todo';
        }
        list[index].status = newStatus;
        this.setState({
            list: list
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <TodayText h2 style={{fontSize: 56}}>Today!</TodayText>
                <TodoList items={this.props.screenProps.list} onUpdateStatus={this.handleUpdateStatus}/>
                <Icon
                    name='add-circle'
                    color='#f50'
                    size={60}
                    onPress={() => this.props.navigation.navigate('Add')}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 0,
        paddingTop: 40
    }
});