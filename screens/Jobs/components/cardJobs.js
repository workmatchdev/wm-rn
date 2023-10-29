import { Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import styles from "../styles";
import { formatDate } from "../../../helpers/date";
import useCreateJobs from "../../CreateJob/hooks/useCreateJobs";
import { useNavigation } from "@react-navigation/native";

const CardJobs = ({ data }) => {

    const navigation = useNavigation();

    const {handleDeleteItem} = useCreateJobs();

    const date = formatDate(new Date(data.date))

    return (
        <View style={styles.jobsContainer}>
            <View style={styles.jobsCard}>
                <Text style={styles.jobTitle}>{data.title}</Text>
                <Text style={styles.ligthText}>
                    {data.description}
                </Text>
                <Text style={styles.semiboldText}>
                    Mathces: <Text style={styles.ligthText}>{data.matchs} / {data.limitMatches}</Text>
                </Text>
                <Text style={styles.semiboldText}>Creado: {date}</Text>
                <View style={styles.buttonsContainer} >
                    <View style={styles.buttonEditContainer}>
                        <Button
                            title='Editar'
                            style={styles.buttonEdit}
                            textStyle={styles.buttonText}
                            onPress={() => {
                                navigation.navigate('UpdateJob',{
                                    jobId: data._id
                                })
                            }}
                        />
                    </View>
                    <View style={styles.buttonEditContainer}>
                        <Button
                            title='Eliminar'
                            style={styles.buttonDelete}
                            textStyle={styles.buttonText}
                            onPress={() => handleDeleteItem(data._id)}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CardJobs;