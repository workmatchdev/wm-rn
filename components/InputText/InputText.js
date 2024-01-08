import { View, TextInput, Text } from "react-native";
import colors from "../../src/assets/colors";

const InputText = (props) => {

    const {
        styles,
        label,
        placeholder,
        password,
        labelStyles = {},
        inputStyles = {},
        error
    } = props;

    return (
        <View style={styles}>
            {label && <Text style={labelStyles}>{label}</Text>}
            <TextInput
                style={inputStyles}
                secureTextEntry={password}
                placeholder={placeholder}
                {...props}
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

export default InputText;