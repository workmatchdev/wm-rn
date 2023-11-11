import { View, ScrollView } from "react-native";
import styles from "./styles";
import ItemList from "./itemList";
import Layout from "../../../Layout";

const List = () => {
    return (
        <Layout>
            <View style={styles.generalContainer}>
                <ScrollView style={styles.scrollViewConatiner}>
                    <View style={styles.principalcontainer}>
                        <ItemList />
                        <ItemList />
                        <ItemList />
                        <ItemList />
                        <ItemList />
                    </View>
                </ScrollView>
            </View>
        </Layout>
    );
}

export default List;