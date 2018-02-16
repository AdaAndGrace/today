import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, List, ListItem, CheckBox, Icon} from 'react-native-elements';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }

    handleAddItem(item) {
        console.log(item)
    }

    handleCheckItem(index) {
        let list = this.state.list;
        list[index].done = !this.state.list[index].done;
        this.setState({
            list: list
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text h2>Today!</Text>
                <List containerStyle={{'width': 350}}>
                    {
                        this.state.list.map((item, index) => (
                            <ListItem
                                key={index}
                                containerStyle={styles.listItem}
                                hideChevron
                                title={
                                    <View>
                                        <CheckBox
                                            containerStyle={styles.listCheckbox}
                                            title={item.title}
                                            uncheckedIcon='circle-thin'
                                            checkedIcon='check-circle'
                                            checked={item.done}
                                            size={30}
                                            textStyle={item.done ? styles.doneItemText : styles.itemText}
                                            onPress={() => this.handleCheckItem(index)}
                                        />
                                    </View>
                                }
                            />
                        ))
                    }
                </List>
                <Icon
                    name='add-circle'
                    color='#f50'
                    onPress={() => this.handleAddItem('TODO: pop a modal to capture new item.  also, style this button plz')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40
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
