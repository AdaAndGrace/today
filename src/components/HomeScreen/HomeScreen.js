import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import TodoList from '../TodoList/TodoList';
import TodayText from '../TodayText/TodayText';
import {Font} from "expo";


//TODO this is just temporary for development
import listData from '../../assets/mockData.json';

export default class HomeScreen extends React.Component {

    state = {
        fontLoaded: false,
        list: listData.list
    };
    async componentDidMount() {
        await Font.loadAsync({
            'WaitingForTheSunrise': require('../../assets/fonts/WaitingForTheSunrise.ttf'),
            'today': require('../../assets/fonts/today.ttf'),
        });

        this.setState({ fontLoaded: true });
    }


    handleAddItem = (item) => {
        console.log(item)
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
            <React.Fragment>
                {this.state.fontLoaded ? (
                <View style={styles.container}>
                    <TodayText h2 style={{fontSize: 56}}>Today!</TodayText>
                    <TodoList items={this.state.list} onUpdateStatus={this.handleUpdateStatus}/>
                    <Icon
                        name='add-circle'
                        color='#f50'
                        size={60}
                        onPress={() => this.handleAddItem('TODO: pop a modal to capture new item.  also, style this button plz')}/>
                </View>
                ) : null
                }
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