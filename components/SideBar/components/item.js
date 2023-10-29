import { View, Text, TouchableHighlight } from 'react-native'
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

const Item = (props) => {
    const { text, icon, route, onPress } = props;
    const navigation = useNavigation()
    return (
        <TouchableHighlight
            onPress={() => {
                if (route) navigation.navigate(route)
                if (onPress) onPress()
            }}
        >
            <View style={styles.itemContainer}>
                <View style={styles.iconContainer}>{icon}</View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
        </TouchableHighlight>
    );
}

export default Item;