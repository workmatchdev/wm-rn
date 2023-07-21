import CardJobs from "./components/cardJobs";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import Layout from "../../components/Layout/Layout";

const Jobs = () => {
    return (
        <Layout>
            <View style={styles.jobsListContainer}>
                <ScrollView>
                    <Text style={styles.pricipalTitle}>Mis vacantes</Text>
                    <CardJobs />
                    <CardJobs />
                    <CardJobs />
                    <CardJobs />
                </ScrollView>
            </View>
        </Layout>
    );
}

export default Jobs;