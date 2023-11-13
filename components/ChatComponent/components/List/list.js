import { View, ScrollView, ActivityIndicator } from "react-native";
import styles from "./styles";
import ItemList from "./itemList";
import Layout from "../../../Layout";
import useChatList from "./hooks/useChatList";

const List = () => {
    const {
        chats,
        loading,
        error,
        handleUpdateMessageStatus
    } = useChatList();
    return (
        <Layout>
            {
                loading ? (
                    <ActivityIndicator size="large" />
                ) :
                    (
                        !error ? (
                            <View style={styles.generalContainer}>
                                <ScrollView style={styles.scrollViewConatiner}>
                                    <View style={styles.principalcontainer}>
                                        {chats.map(chat => {
                                            return <ItemList key={chat._id} data={chat} handleUpdateMessageStatus={handleUpdateMessageStatus} />
                                        })}
                                    </View>
                                </ScrollView>
                            </View>
                        ) : <Text>{error?.message}</Text>
                    )
            }
        </Layout>
    );
}

export default List;