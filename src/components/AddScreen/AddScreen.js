import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import TodayText from '../TodayText/TodayText';

export default class AddScreen extends React.Component {

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <TodayText style={{fontSize: 24, marginTop: 200}}>Woohoo! We have an add screen!</TodayText>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <TodayText style={{fontSize: 24, color: '#137bee', textDecorationLine: 'underline'}}>Go Back Home</TodayText>
                    </TouchableOpacity>
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
        marginTop: 0,
        paddingTop: 40
    }
});