import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const Select = (props) => {
    const {
        items,
        label,
        selectStyles = {},
        labelStyles = {},
        defaultButtonText = "--Selecciona"
    } = props;
    return (
        <View>
            <Text style={labelStyles}>{label}</Text>
            <SelectDropdown
                defaultButtonText={defaultButtonText}
                buttonStyle={selectStyles}
                data={items}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
        </View>
    );
}

export default Select;