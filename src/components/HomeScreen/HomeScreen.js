import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import TodoList from '../TodoList/TodoList';
import TodayText from '../TodayText/TodayText';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
           display:'none'
        }
    };

    handleUpdateStatus  = (id) => {
        this.props.screenProps.handleUpdateStatus(id);
    };

    render() {
        return (
            <View style={styles.container}>
                <TodayText h2 style={{fontSize: 56}}>Today!</TodayText>
                <TodoList items={this.props.screenProps.list} onUpdateStatus={this.handleUpdateStatus}/>
                <View style={{zIndex: 100}}>
                <Icon
                    name='add-circle'
                    color='#f50'
                    size={60}
                    onPress={() => this.props.navigation.navigate('Add')}
                />
                </View>
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
