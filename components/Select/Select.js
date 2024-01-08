import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import colors from '../../src/assets/colors';

const Select = (props) => {
    const {
        items,
        label,
        selectStyles = {},
        labelStyles = {},
        defaultButtonText = "--Selecciona",
        onChange,
        value,
        error
    } = props;

    return (
        <View>
            <Text style={labelStyles}>{label}</Text>
            <SelectDropdown
                defaultValue={value}
                defaultButtonText={defaultButtonText}
                buttonStyle={selectStyles}
                data={items}
                onSelect={(selectedItem, index) => {
                    onChange(selectedItem)
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
            {error ? <Text
                style={{
                    color: colors.principalRed,
                    paddingVertical: 5,
                    fontFamily: 'Nunito-Bold'
                }}
            >{error}</Text> : null}
        </View>
    );
}

export default Select;