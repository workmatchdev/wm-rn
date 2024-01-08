import { View, Text } from "react-native";
import colors from "../../src/assets/colors";

const ErrorForm = ({ error }) => {
    if (!error) return null
    return (
        <View
            style={{
                backgroundColor: colors.principalRed,
                paddingVertical: 5,
                borderRadius: 5
            }}
        >
            <Text
                style={{
                    color: colors.principalWhite,
                    fontFamily: 'Nunito-Bold',
                    textAlign: 'center'
                }}
            >{error}</Text>
        </View>
    );
}

export default ErrorForm;