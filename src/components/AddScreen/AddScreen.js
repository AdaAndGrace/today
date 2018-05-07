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




    //todo these two functions could probably be refined and put into one thing
    //duplicating too much here

    handleTeaSelection = (selectedIndex) => {
        let selectedTea;
        //we don't require tea, so if the user pushes a tea button that is already selected
        //let's deselect it.
        if(selectedIndex === this.state.teaSelectedIndex) {
            selectedTea = -1;
        } else {
            selectedTea = selectedIndex;
        }
        this.setState({
            teaSelectedIndex: selectedTea,
            teaSelectedType: teaList.list[selectedTea].type
        });
    };

    handleCategorySelection = (selectedIndex) => {
        let selectedCategory;
        //we don't require category, so if the user pushes a tea button that is already selected
        //let's deselect it.
        if(selectedIndex === this.state.categorySelectedIndex) {
            selectedCategory = -1;
        } else {
            selectedCategory = selectedIndex;
        }
        this.setState({
            categorySelectedIndex: selectedCategory,
            categorySelectedType: categoryList.list[selectedCategory].type
        })
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
                        onPress={this.handleTeaSelection}
                        selectedButtonStyle={styles.selectedButton}
                        selectedTextStyle={styles.selectedButtonText}

                    />

                    <ButtonGroup
                        buttons={this.generateButtonList(categoryList.list,true)}
                        selectedIndex={this.state.categorySelectedIndex}
                        onPress={this.handleCategorySelection}
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
