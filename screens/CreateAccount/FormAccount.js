import styles from "./styles";
import ApplicantsForms from "../../components/Forms/ApplicantForms/ApplicantsForm";
import { ScrollView, View } from "react-native";

const FormAccount = (props) => {
    return (
        <View>
            <ScrollView>
                <View style={styles.principalContainer}>
                    <ApplicantsForms styles={styles} {...props} />
                </View>
            </ScrollView>
        </View>
    );
}

export default FormAccount;