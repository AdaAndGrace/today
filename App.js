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
                done: true
            },
            {
                title: 'Buy Coffee',
                done: false
            },
            {
                title: 'Call Amy',
                done: false
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

    handleCheckItem = (index) => {
        let list = this.state.list;
        list[index].done = !this.state.list[index].done;
        this.setState({
            list: list
        });
    };


    render() {
        return (

            <React.Fragment>
                {this.state.fontLoaded ? (
                    <View style={styles.container}>
                        <TodayText h2 style={{fontSize: 56}}>Today!</TodayText>


                        <TodoList items={this.state.list} onCheckItem={this.handleCheckItem}/>
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
    },
    list: {
        width: 200
    },
    listItem: {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        margin: 0
    },
    listCheckbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft:0
    },
    itemText: {
        fontSize: 16
    },
    doneItemText: {
        color: '#aaa',
        fontSize: 16,
        textDecorationLine: 'line-through'
    }
});
