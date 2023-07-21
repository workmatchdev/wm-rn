import { View, TextInput, Text } from "react-native";

const InputText = (props) => {

    const {
        styles,
        label,
        placeholder,
        password,
        labelStyles = {},
        inputStyles = {}
    } = props;

    return (
        <View style={styles}>
            { label && <Text style={labelStyles}>{label}</Text>}
            <TextInput
                style={inputStyles}
                secureTextEntry={password}
                placeholder={placeholder}
                {...props}
            />
        </View>
    );
}

export default InputText;