import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/components/HomeScreen/HomeScreen';




export default class App extends React.Component {




    render() {
        return (

            <React.Fragment>
                <HomeScreen/>

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
