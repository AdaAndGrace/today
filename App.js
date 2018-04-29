import React from 'react';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import AddScreen from './src/components/AddScreen/AddScreen';
import {StackNavigator} from 'react-navigation';
import {Font} from "expo";
import {StyleSheet, View} from 'react-native';

import listData from './src/assets/mockData.json';

// StackNavigator is a function that takes a route configuration object
// and an options object and returns a React component
const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Add: {
            screen: AddScreen,
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default class App extends React.Component {
    state = {
        fontLoaded: false,
        list: listData.list,
        bulletCount: listData.list.length
    };

    addItem = (newItem) => {
        let updatedList = this.state.list;
        let bulletCount = this.state.bulletCount + 1;

        newItem.id = bulletCount;

        updatedList.unshift(newItem);
        this.setState({
            list: updatedList,
            bulletCount: bulletCount
        });
    };

    updateStatus = (id) => {
        let list = this.state.list;
        itemToUpdate = list.findIndex(bullet => bullet.id === id);
        let newStatus;

        switch(list[itemToUpdate].status) {
            case 'todo':
                newStatus = 'inprogress';
                break;
            case 'inprogress':
                newStatus = 'completed';
                break;
            case 'completed':
                newStatus = 'todo';
                break;
            default:
                newStatus = 'todo';
        }
        list[itemToUpdate].status = newStatus;
        this.setState({
            list: list
        })
    };

    async componentDidMount() {
        await Font.loadAsync({
            'WaitingForTheSunrise': require('./src/assets/fonts/WaitingForTheSunrise.ttf'),
            'bullets': require('./src/assets/fonts/bullets.ttf'),
        });

        this.setState({ fontLoaded: true });
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.fontLoaded ? (
                    //this isn't optimal passing everything to all screens but we'll fix that when we add redux
                    <RootStack screenProps={{list: this.state.list, addItem: this.addItem, handleUpdateStatus: this.updateStatus}}/>
                ) : null
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
