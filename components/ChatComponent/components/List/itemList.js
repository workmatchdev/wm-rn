import { useMemo } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import useSession from "../../../../hooks/sessions/useSession";
import { useNavigation } from "@react-navigation/native";

const ItemList = (props) => {

    const { data, handleUpdateMessageStatus } = props;

    const {
        isBussiness
    } = useSession();

    const navigation = useNavigation();

    const { counterMessagesNoView, applicant, bussines, lastMessages, _id } = data;
    const informationChat = isBussiness ? applicant : bussines;

    const {
        name,
        lastName
    } = informationChat;

    const currentImage = useMemo(() => {
        if(informationChat?.image?.url !== 'default') return { uri: informationChat?.image.url }
        return require('../../../../src/img/user.png')
    }, [informationChat])

    const messageText = useMemo(() => {
        if (lastMessages.type = 'text') {
            const date = new Date(lastMessages[0].date)
            const options = {
                year: '2-digit',
                month: '2-digit',
                day: 'numeric',
            };

            return {
                text: lastMessages[0].message.content,
                date: date.toLocaleDateString('mx-MX', options),
                time: date.toLocaleTimeString('es-ES', { hour12: false, hour: '2-digit', minute: '2-digit' })
            }
        }
    }, [lastMessages])

    return (
        <TouchableHighlight
            underlayColor="#DDDDDD"
            onPress={() => {
                handleUpdateMessageStatus(_id);
                navigation.navigate('Chat', {
                    chatId: _id,
                    name: `${name} ${lastName}`
                });
            }}
        >
            <View style={styles.listItem}>
                <View style={styles.column1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={currentImage}
                            style={{ width: 70, height: 70 }}
                        />
                    </View>
                    <View style={styles.column1Text}>
                        <Text style={styles.name}>{name} {lastName}</Text>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.newMessageText}>{messageText.text}</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text>{messageText.date} {messageText.time}</Text>
                    {counterMessagesNoView > 0 && <View style={styles.newMessage}>
                        <Text style={styles.conuterText}>{counterMessagesNoView}</Text>
                    </View>}
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default ItemList;