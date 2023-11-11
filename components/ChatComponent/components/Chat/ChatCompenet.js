import { useRef } from "react";
import Layout from "../../../Layout";
import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import InputText from "../../../InputText";
import styles from "./styles";
import { SendIcon } from "../../../../src/assets/icons";

const Chat = () => {
    const scrollViewRef = useRef();
    return (
        <Layout>
            <View>
                <Text style={styles.chatUser}>Jose Almazan</Text>
            </View>
            <View style={styles.generalContainer}>
                <ScrollView
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                    style={styles.scrollViewConatiner}
                >
                    <View style={styles.list}>
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageUser}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris faucibus augue et mollis porttitor. Etiam a ipsum
                                eget est varius aliquam. Morbi tincidunt
                            </Text>
                            <Text style={styles.time}>4:15 pm</Text>
                        </View>
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageSender}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris faucibus augue et mollis porttitor. Etiam a ipsum
                                eget est varius aliquam. Morbi tincidunt
                            </Text>
                            <Text style={styles.timeSender}>4:15 pm</Text>
                        </View>
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageUser}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris faucibus augue et mollis porttitor. Etiam a ipsum
                                eget est varius aliquam. Morbi tincidunt
                            </Text>
                            <Text style={styles.time}>4:15 pm</Text>
                        </View>
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageUser}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris faucibus augue et mollis porttitor. Etiam a ipsum
                                eget est varius aliquam. Morbi tincidunt
                            </Text>
                            <Text style={styles.time}>4:15 pm</Text>
                        </View>
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageUser}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris faucibus augue et mollis porttitor. Etiam a ipsum
                                eget est varius aliquam. Morbi tincidunt
                            </Text>
                            <Text style={styles.time}>4:15 pm</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <InputText
                        placeholder='Mensaje'
                    />
                </View>
                <TouchableHighlight style={styles.sendButtonContainer} >
                    <SendIcon width='30' height='30' fill='#fff' stroke="#ccc" strokeWidth={0.5} />
                </TouchableHighlight>
            </View>
        </Layout>
    );
}

export default Chat;