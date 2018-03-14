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
                done: true,
                status: 'done'
            },
            {
                title: 'Buy Coffee',
                done: false,
                status: 'todo'
            },
            {
                title: 'Call Amy',
                done: false,
                status: 'todo'
            }
        ]
    };
    async componentDidMount() {
        await Font.loadAsync({
            'WaitingForTheSunrise': require('./src/assets/fonts/WaitingForTheSunrise.ttf'),
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
                newStatus = 'doing';
                break;
            case 'doing':
                newStatus = 'done';
                break;
            case 'done':
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
