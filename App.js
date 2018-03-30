import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Font } from 'expo';
import HomeScreen from './src/components/HomeScreen/HomeScreen';


//TODO this is just temporary for development
import listData from './src/assets/mockData.json';


export default class App extends React.Component {

    state = {
        fontLoaded: false,
        list: listData.list
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
                        <HomeScreen
                            list={this.state.list}
                            handleAddItem={this.handleAddItem}
                            handleUpdateStatus={this.handleUpdateStatus}/>
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
