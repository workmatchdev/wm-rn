import CardJobs from "./components/cardJobs";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import Layout from "../../components/Layout/Layout";
import useJobs from "../CreateJob/hooks/useJobs";

const Jobs = () => {

    const { jobs } = useJobs();

    return (
        <Layout>
            <View style={styles.jobsListContainer}>
                <ScrollView>
                    <Text style={styles.pricipalTitle}>Mis vacantes</Text>
                    {jobs.map(job => {
                        return (
                            <CardJobs data={job} key={job._id} />
                        )
                    })}
                </ScrollView>
            </View>
        </Layout>
    );
}

export default Jobs;