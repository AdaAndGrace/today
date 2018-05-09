import React from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {FormInput, FormValidationMessage, ButtonGroup} from 'react-native-elements';
import TodayText from '../TodayText/TodayText';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../../config.json';
import teaList from '../../../src/assets/teaData.json';
import categoryList from '../../../src/assets/categoryData.json';
const Icon = createIconSetFromFontello(fontelloConfig, 'bullets');

export default class AddScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teaSelectedIndex: -1,
            teaSelectedType: '',
            categorySelectedIndex: -1,
            categorySelectedType: '',
            title: '',
            titleError: false
        }
    }


//TODO document this better
    generateButtonList = (sourceList, iconOnly) => {
        let buttonList = [];
        for (let i=0; i < sourceList.length; i++) {
            let buttonText = iconOnly ? '' : sourceList[i].displayName;
            let newButton = () => <TodayText style={styles.icon}><Icon name={sourceList[i].icon}/> {buttonText}</TodayText>;
            buttonList.push({element: newButton});
        }
        return buttonList;
    };

    handleAddItem = () => {
        if(!this.state.title) {
            this.setState({
                titleError: 'Please enter a title'
            });
        } else {
            let date = new Date();
            let newItem = {
                title: this.state.title,
                tea: this.state.teaSelectedType,
                category: this.state.categorySelectedType,
                done: false,
                status: "todo",
                creationDate: date
            };
            this.props.navigation.navigate('Home');
            this.props.screenProps.addItem(newItem);
        }
    };


    handleButtonGroupSelection = (buttonGroup, list, selectedIndex) => {
        //make a copy of state so we're not mutating it directly
        let newState = Object.assign({}, this.state);

        //we don't require tea, so if the user pushes a tea button that is already selected
        //let's deselect it.
        if(selectedIndex === this.state[buttonGroup + 'SelectedIndex']) {
            newState[buttonGroup + 'SelectedIndex'] = -1;
        } else {
            newState[buttonGroup + 'SelectedIndex'] = selectedIndex;
            newState[buttonGroup + 'SelectedType'] = list[selectedIndex].type;
        }

        this.setState(newState);
    };

    render() {
        return (
            <React.Fragment>
                <ScrollView style={styles.container}>
                    <TodayText h2 style={styles.titleText}>Add a new bullet:</TodayText>
                    <FormInput
                        placeholder="title"
                        value={this.state.title}
                        inputStyle={styles.input}
                        maxLength={25}
                        onChangeText={(text) => this.setState({title: text})}
                        onFocus={() => this.setState({titleError: null})}
                    />
                    <FormValidationMessage>
                        {this.state.titleError &&
                            <TodayText style={{fontSize: 24}}>{this.state.titleError}</TodayText>
                        }
                    </FormValidationMessage>



                    <ButtonGroup
                        buttons={this.generateButtonList(teaList.list)}
                        selectedIndex={this.state.teaSelectedIndex}
                        onPress={(event) => this.handleButtonGroupSelection("tea", teaList.list, event)}
                        selectedButtonStyle={styles.selectedButton}

                    />

                    <ButtonGroup
                        buttons={this.generateButtonList(categoryList.list,true)}
                        selectedIndex={this.state.categorySelectedIndex}
                        onPress={(event) => this.handleButtonGroupSelection("category", categoryList.list, event)}
                        selectedButtonStyle={styles.selectedButton}
                    />
                    <TouchableOpacity onPress={this.handleAddItem}>
                        <TodayText style={styles.links}>Add Bullet</TodayText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <TodayText style={styles.links}>Cancel</TodayText>
                    </TouchableOpacity>
                </ScrollView>
            </React.Fragment>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 0,
        padding: 20,
        paddingTop: 40
    },
    input: {
        fontSize:34,
        fontFamily:'WaitingForTheSunrise'
    },
    icon: {
        fontSize:20
    },
    selectedButton: {
        backgroundColor:'lime'
    },
    selectedButtonText: { //todo this doesn't work. we need to update our elements manually for selected button styling
        color:'white'
    },
    links: {
      fontSize: 24,
      color: '#137bee',
      textDecorationLine: 'underline'
    },
    titleText: {
      fontSize: 44
    }
});
