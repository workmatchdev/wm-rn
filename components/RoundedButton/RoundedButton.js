import { TouchableHighlight, View } from "react-native";
import styles from "./styles";

const RoundedButton = (props) => {
    const { icon, color } = props;
    return (
        <TouchableHighlight {...props} style={{ ...styles.button, backgroundColor: color }}>
            <View>
                {icon}
            </View>
        </TouchableHighlight >
    );
}

export default RoundedButton;