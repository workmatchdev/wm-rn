import { View, Text, Image } from "react-native";
import Button from "../../components/Button/Button";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const postulationStatus = {
    match: 'Match',
    review: 'En revision',
    reviewed: 'Revisado',
    discarted: 'Descartado'
}

const PostulationCard = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.postulationCard}>
            <View style={styles.postulationContainer}>
                <View style={styles.dataContainer}>
                    <Text style={styles.postulationTitle}>Titulo del puesto</Text>
                    <Text style={styles.semiboldText}>15/12/2023</Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.semiboldText}>Status:</Text>
                        <Text style={styles['match']}>{postulationStatus['match']}</Text>
                    </View>
                    <Text style={styles.semiboldText}>Descripcion</Text>
                    <Text style={styles.ligthText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id vehicula purus. Duis vel egestas dolor. Vestibulum iaculis sapien a bibendum tempor.
                    </Text>
                    <View style={styles.companyContainer}>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logo}
                                source={{
                                    uri: 'https://www.novoplast.gt/wp-content/uploads/2019/08/TU-LOGO-AQUI-BLANCO-Y-GRIS.png',
                                }}
                            />
                        </View>
                        <Text style={styles.semiboldText}>Empresa</Text>
                    </View>
                    <View>
                        <Button
                            style={styles.button}
                            textStyle={styles.buttonText}
                            title='Ver vacante'
                            onPress={() => {
                                navigation.navigate('Vacancies')
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default PostulationCard;