import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import colors from "../../src/assets/colors";

const SelectJob = (props) => {
    const { setcurrentJob, currentJob, items } = props;
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View style={styles.generalContainer}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={items}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Selecciona una vacante' : '...'}
                searchPlaceholder="Search..."
                value={currentJob}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setcurrentJob(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
}

export default SelectJob;


const styles = StyleSheet.create({
    generalContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginTop: 10
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: colors.principalColor,
        left: 10,
        top: 2,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        borderRadius: 5,
        color: '#f2f2f2',
        padding: 2
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});