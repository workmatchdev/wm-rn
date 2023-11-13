import { useRef } from "react";
import Layout from "../../../Layout";
import { View, Text, ScrollView, TouchableHighlight, ActivityIndicator } from "react-native";
import InputText from "../../../InputText";
import styles from "./styles";
import { SendIcon } from "../../../../src/assets/icons";
import useChat from "./hooks/useChat";
import { Formik } from "formik";
import useSession from "../../../../hooks/sessions/useSession";

const Chat = () => {

    const { user } = useSession();
    const {
        handleSubmit,
        messages,
        loading,
        error
    } = useChat();

    const scrollViewRef = useRef();
    return (
        <Layout>
            <View>
                <Text style={styles.chatUser}>Jose Almazan</Text>
            </View>
            <View style={styles.generalContainer}>
                {
                    loading ? (
                        <ActivityIndicator size="large" />
                    ) :
                        (
                            !error ? (
                                <ScrollView
                                    ref={scrollViewRef}
                                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                                    style={styles.scrollViewConatiner}
                                >
                                    <View style={styles.list}>
                                        {messages.map(message => {

                                            const { message: { content, type }, sender, date } = message;

                                            const dateMessage = new Date(date)
                                            const options = {
                                                year: '2-digit',
                                                month: '2-digit',
                                                day: 'numeric',
                                            };
                                            const dateString = dateMessage.toLocaleDateString('mx-MX', options);
                                            const timeString = dateMessage.toLocaleTimeString('es-ES', { hour12: false, hour: '2-digit', minute: '2-digit' })

                                            if (sender === user._id) {
                                                return (
                                                    <View style={styles.messageContainerUser}>
                                                        <View style={styles.messageContentUser}>
                                                            <Text style={styles.messageUser}>
                                                                {content}
                                                            </Text>
                                                            <Text style={styles.time}>{dateString} {timeString}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            }

                                            return (
                                                <View style={styles.messageContainerSender}>
                                                    <View style={styles.messageContentSender}>
                                                        <Text style={styles.messageSender}>
                                                            {content}
                                                        </Text>
                                                        <Text style={styles.timeSender}>{dateString} {timeString}</Text>
                                                    </View>
                                                </View>
                                            )
                                        })}
                                    </View>
                                </ScrollView>
                            ) : <Text>{error?.message}</Text>
                        )
                }

            </View>
            <Formik
                initialValues={{
                    message: ''
                }}
                onSubmit={(values, action) => {
                    handleSubmit(values);
                    action.resetForm()
                }}
            >
                {({ handleChange, handleSubmit, values }) => {
                    return (
                        <View style={styles.inputContainer}>
                            <InputText
                                styles={styles.input}
                                inputStyles={styles.inputStyles}
                                onChangeText={handleChange('message')}
                                value={values.message}
                                placeholder='Mensaje'
                            />
                            <TouchableHighlight
                                onPress={handleSubmit}
                                style={styles.sendButtonContainer}
                            >
                                <SendIcon width='30' height='30' fill='#fff' stroke="#ccc" strokeWidth={0.5} />
                            </TouchableHighlight>
                        </View>
                    )
                }}
            </Formik>
        </Layout>
    );
}

export default Chat;