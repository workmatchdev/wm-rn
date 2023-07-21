import { TouchableHighlight, View, Text } from "react-native";

const Button = (props) => {
    const { title = '', styles = {}, textStyle } = props;
    return (
        <View>
            <TouchableHighlight
                style={styles}
                {...props}
            >
                <Text style={textStyle}>{title}</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Button;