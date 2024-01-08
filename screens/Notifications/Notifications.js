import Layout from "../../components/Layout/Layout";
import { View, Text, ScrollView } from 'react-native';
import { CheckMarkRounded, Message, XMarckRounded } from "../../src/assets/icons";
import styles from "./styles";
import colors from "../../src/assets/colors";

const Notifications = () => {
    return (
        <Layout>
            <ScrollView>
                <View style={styles.principalContainer}>
                    <View style={styles.notificationContainer}>
                        <View style={styles.iconContainer}>
                            <CheckMarkRounded fill="none" strokeWidth={1.5} stroke={colors.principalGreen} width='30' height='30' />
                        </View>
                        <Text style={styles.notificationtext}>Felicidades tienes un nuevo match en la vacante "Dolo Lorem Ipsum" ve a tu chat para ponerte en contacto</Text>
                    </View>
                    <View style={styles.notificationContainer}>
                        <View style={styles.iconContainer}>
                            <CheckMarkRounded fill="none" strokeWidth={1.5} stroke={colors.principalGreen} width='30' height='30' />
                        </View>
                        <Text style={styles.notificationtext}>Se ha activado tu membresia "dolo lorem ipsum"</Text>
                    </View>
                    <View style={styles.notificationContainer}>
                        <View style={styles.iconContainer}>
                            <Message fill={colors.secondarypalColor} width='30' height='30' />
                        </View>
                        <Text style={styles.notificationtext}>Has llegado al limite de tus matchs del dia de hoy</Text>
                    </View>
                    <View style={styles.notificationContainer}>
                        <View style={styles.iconContainer}>
                            <Message fill={colors.secondarypalColor} width='30' height='30' />
                        </View>
                        <Text style={styles.notificationtext}>Tienes mensajes sin leer ve a tus mensajes para ponerte al corriente.</Text>
                    </View>
                    <View style={styles.notificationContainer}>
                        <View style={styles.iconContainer}>
                            <XMarckRounded fill="none" strokeWidth={1.5} stroke={colors.principalRed} width='30' height='30' />
                        </View>
                        <Text style={styles.notificationtext}>Tu membresia ha caducado</Text>
                    </View>
                </View>
            </ScrollView>
        </Layout>
    );
}

export default Notifications;