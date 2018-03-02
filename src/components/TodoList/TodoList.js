import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, ListItem, CheckBox} from 'react-native-elements';

export default class TodoList extends React.Component {

    handleCheckItem = (index) => {
        this.props.onCheckItem(index);
    };

    render() {
        return (
            <List containerStyle={{'width': 350}}>
                {
                    this.props.items.map((item, index) => (
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
        )
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

