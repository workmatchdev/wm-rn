import styles from "./styles";
import Layout from '../../components/Layout/Layout';
import ApplicantsForms from "../../components/Forms/ApplicantForms/ApplicantsForm";
import { ScrollView, View } from "react-native";

const FormAccount = (props) => {
    return (
        <Layout>
            <ScrollView>
                <View style={styles.principalContainer}>
                    <ApplicantsForms styles={styles} {...props} />
                </View>
            </ScrollView>
        </Layout>
    );
}

export default FormAccount;