import React from 'react';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import AddScreen from './src/components/AddScreen/AddScreen';
import {StackNavigator} from 'react-navigation';
import {Font} from "expo";

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
        list: listData
    };
    async componentDidMount() {
        await Font.loadAsync({
            'WaitingForTheSunrise': require('./src/assets/fonts/WaitingForTheSunrise.ttf'),
            'today': require('./src/assets/fonts/today.ttf'),
        });

        this.setState({ fontLoaded: true });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.fontLoaded ? (
                    <RootStack screenProps={this.state.list}/>
                ) : null
                }
            </React.Fragment>

        );
    }
}