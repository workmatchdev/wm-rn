import { Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import styles from "../styles";

const CardJobs = () => {
    return (
        <View style={styles.jobsContainer}>
            <View style={styles.jobsCard}>
                <Text style={styles.jobTitle}>Titulo de empleo</Text>
                <Text style={styles.ligthText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est nulla, porttitor sit amet tempor non, scelerisque in diam. In sit amet posuere ante. Nullam gravida elementum porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Text>
                <Text style={styles.semiboldText}>
                    Mathces: <Text style={styles.ligthText}>5 / 10</Text>
                </Text>
                <Text style={styles.semiboldText}>Creado: 16/07/2023</Text>
                <View style={styles.buttonsContainer} >
                    <View style={styles.buttonEditContainer}>
                        <Button
                            title='Editar'
                            style={styles.buttonEdit}
                            textStyle={styles.buttonText}
                        />
                    </View>
                    <View style={styles.buttonEditContainer}>
                        <Button
                            title='Eliminar'
                            style={styles.buttonDelete}
                            textStyle={styles.buttonText}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CardJobs;