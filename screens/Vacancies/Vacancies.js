import Layout from "../../components/Layout/Layout";
import { Text, View, ScrollView, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";

const Vacancies = () => {

    const postulationStatus = {
        match: 'Match',
        review: 'En revision',
        reviewed: 'Revisado',
        discarted: 'Descartado'
    }

    return (
        <Layout>
            <ScrollView>
                <View style={styles.postulationContainer}>
                    <Text style={styles.pricipalTitle}>Desarrollador Web</Text>
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
                                title='Cancelar postulacion'
                                onPress={() => {
                                }}
                            />
                            <Button
                                style={styles.buttonMessage}
                                textStyle={styles.buttonText}
                                title='Mensajes'
                                onPress={() => {
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Layout>
    );
}

export default Vacancies;