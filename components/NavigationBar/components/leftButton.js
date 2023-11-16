import { View, TouchableHighlight } from "react-native";
import styles from "../styles";
import { LeftArrow } from "../../../src/assets/icons";
import colors from "../../../src/assets/colors";
import { useNavigation } from "@react-navigation/native";

const LeftButtons = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.actionContainer}>
            <TouchableHighlight
                underlayColor="rgba(255,255,255,0)"
                onPress={() => {
                    navigation.goBack();
                }}>
                <LeftArrow
                    fill={colors.principalWhite} stroke={colors.principalWhite} width='35' height='35'
                />
            </TouchableHighlight>
        </View>
    );
}

export default LeftButtons;