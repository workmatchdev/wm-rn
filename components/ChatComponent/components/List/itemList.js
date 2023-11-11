import { View, Text, Image, TouchableHighlight } from "react-native";
import styles from "./styles";

const ItemList = () => {
    return (
        <TouchableHighlight
            underlayColor="#DDDDDD"
            onPress={() => { }}
        >
            <View style={styles.listItem}>
                <View style={styles.column1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/one-piece-gear-5-portada-6505f17bdc0df.jpg?crop=0.75xw:1xh;center,top&resize=1200:*' }}
                            style={{ width: 70, height: 70 }}
                        />
                    </View>
                    <View style={styles.column1Text}>
                        <Text>Mokey D Luffy</Text>
                        <Text>Dolo lorem ipsum</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text>11/11/2023</Text>
                    <View style={styles.newMessage}>
                        <Text style={styles.newMessageText}>2</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default ItemList;