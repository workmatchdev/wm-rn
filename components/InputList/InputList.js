import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Message } from "../../src/assets/icons";
import SectionedMultiSelect from "../react-native-sectioned-multi-select"
import Icon from "react-native-vector-icons/MaterialIcons";
import useInputList from "./hooks/useInputList";
import {
    XmarkIcon,
    ChevronDown,
    SearchIcon,
    ChevronUpIcon,
    CheckMark,
    CancelIcon
} from "../../src/assets/icons";
import colors from "../../src/assets/colors";

class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedItems: [],
            items: [
                {
                    name: "KeyWords",
                    id: 0,
                    children: []
                },
                {
                    name: "Keywords extras",
                    id: 1,
                    children: []
                }
            ]
        };
    }

    componentDidMount() {
        this.setState({
            items: [
                {
                    name: "KeyWords",
                    id: 0,
                    children: this.props.keywords
                },
                {
                    name: "Keywords extras",
                    id: 1,
                    children: this.props.extraKeywords
                }
            ],
            selectedItems: this.props.selectedItems
        });

        this.props.onChange({
            items: [
                {
                    name: "KeyWords",
                    id: 0,
                    children: this.props.keywords
                },
                {
                    name: "Keywords extras",
                    id: 1,
                    children: this.props.extraKeywords
                }
            ],
            selectedItems: this.props.selectedItems
        })
        
    }

    onSelectedItemsChange = (selectedItems) => {
        console.log(selectedItems);
        this.setState({ ...this.state, selectedItems });
        this.props.onChange({
            items: this.state.items,
            selectedItems
        })
    };

    generateRandomId() {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        return randomNumber;
    }

    handleAddExtraValue = ({ inputValue }) => {
        const array = JSON.parse(JSON.stringify(this.state.items));
        const id = this.generateRandomId();
        const addNewValue = [...this.state.items[1].children, {
            name: inputValue,
            id: id
        }];
        array[1].children = addNewValue;
        this.setState({ ...this.state, items: array });
    }

    icon = ({ name, style }) => {
        // flatten the styles
        const flat = StyleSheet.flatten(style)
        // remove out the keys that aren't accepted on View
        const { color, fontSize, ...styles } = flat

        let iconComponent
        // the colour in the url on this site has to be a hex w/o hash

        const Search = (
            <SearchIcon width='20' height='20' fill='#000' />
        );
        const Down = (
            <ChevronDown width='20' height='20' fill={colors.principalColor} />
        );
        const Up = (
            <ChevronUpIcon width='20' height='20' fill={colors.principalColor} />
        );
        const Close = (
            <XmarkIcon width='20' height='20' fill={colors.principalRed} />
        );
        const Check = (
            <CheckMark fill={colors.principalGreen} stroke={colors.principalGreen} width='20' height='20' />
        );
        const Cancel = (
            <CancelIcon width='20' height='20' fill={colors.principalRed} />
        );

        switch (name) {
            case 'search':
                iconComponent = Search
                break
            case 'keyboard-arrow-up':
                iconComponent = Up
                break
            case 'keyboard-arrow-down':
                iconComponent = Down
                break
            case 'close':
                iconComponent = Close
                break
            case 'check':
                iconComponent = Check
                break
            case 'cancel':
                iconComponent = Cancel
                break
            default:
                iconComponent = null
                break
        }
        return <View style={styles}>{iconComponent}</View>
    }

    render() {
        return (
            <View style={styles.app}>
                <SectionedMultiSelect
                    items={this.state.items}
                    IconRenderer={this.icon}
                    uniqueKey="id"
                    subKey="children"
                    confirmText="Guardar"
                    selectText="Selecciona categorias de busqueda"
                    showDropDowns={false}
                    readOnlyHeadings={true}
                    showRemoveAll={true}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={this.state.selectedItems}
                    onAddNewItem={(props) => {
                        this.handleAddExtraValue(props)

                    }}
                    addNewValues={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        marginHorizontal: "auto",
        maxWidth: 500
    },
    logo: {
        height: 80
    },
    header: {
        padding: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginVertical: "1em",
        textAlign: "center"
    },
    text: {
        lineHeight: "1.5em",
        fontSize: "1.125rem",
        marginVertical: "1em",
        textAlign: "center"
    },
    link: {
        color: "#1B95E0"
    },
    code: {
        fontFamily: "monospace, monospace"
    }
});

export default App;
