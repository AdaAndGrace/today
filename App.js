import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import TodoList from './src/components/TodoList/TodoList';
import { Font } from 'expo';
import TodayText from './src/components/TodayText/TodayText'


export default class App extends React.Component {

    state = {
        fontLoaded: false,
        list: [
            {
                title: 'Take out the trash',
                done: false,
                status: 'task'
            },
            {
                title: 'Buy Coffee',
                done: false,
                status: 'task'
            },
            {
                title: 'Call Amy',
                done: false,
                status: 'task'
            }
        ]
    };
    async componentDidMount() {
        await Font.loadAsync({
            'WaitingForTheSunrise': require('./src/assets/fonts/WaitingForTheSunrise.ttf'),
            'today': require('./src/assets/fonts/today.ttf'),
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
            case 'task':
                newStatus = 'task-completed';
                done='true';
                break;
            case 'task-completed':
                newStatus = 'task-migrated';
                break;
            case 'task-migrated':
                newStatus = 'task-cancelled';
                break;
            case 'task-cancelled':
                newStatus = 'appointment';
                break;
            case 'appointment':
                newStatus = 'appointment-completed';
                done='true';
                break;
            case 'appointment-completed':
                newStatus = 'appointment-migrated';
                break;
            case 'appointment-migrated':
                newStatus = 'appointment-cancelled';
                break;
            case 'appointment-cancelled':
                newStatus = 'event';
                break;
            case 'event':
                newStatus = 'event-completed';
                done='true';
                break;
            case 'event-completed':
                newStatus = 'event-migrated';
                break;
            case 'event-migrated':
                newStatus = 'event-cancelled';
                break;
            case 'event-cancelled':
                newStatus = 'deadline';
                break;
            case 'deadline':
                newStatus = 'expenses';
                break;
            case 'expenses':
                newStatus = 'idea';
                break;
            case 'idea':
                newStatus = 'important';
                break;
            case 'important':
                newStatus = 'inspiration';
                break;
            case 'inspiration':
                newStatus = 'notes';
                break;
            case 'notes':
                newStatus = 'question';
                break;
            default:
                newStatus = 'task';
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
                            onPress={() => this.handleAddItem('TODO: pop a modal to capture new item.  also, style this button plz')}/>
                    </View>
                    ) : null
                }
            </React.Fragment>
        );
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
