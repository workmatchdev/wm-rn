import { Text, ScrollView, View } from "react-native";
import Layout from "../../components/Layout/Layout";
import styles from "./styles";
import PostulationCard from "./PostulationCard";

const MyPostulations = () => {

    return (
        <Layout>
            <ScrollView>
                <View style={styles.postulationListContainer}>
                <Text style={styles.pricipalTitle}>Tus postulaciones</Text>
                    <PostulationCard />
                    <PostulationCard />
                    <PostulationCard />
                    <PostulationCard />
                    <PostulationCard />
                    <PostulationCard />
                </View>
            </ScrollView>
        </Layout>
    );
}

export default MyPostulations;