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
                            <CheckMarkRounded  fill="none" strokeWidth={1.5} stroke={colors.principalGreen} width='30' height='30' />
                        </View>
                        <Text style={styles.notificationtext}>Tienes una en tu status actualizacion en "Dolo Lorem Ipsum"</Text>
                    </View>
                    <View style={styles.notificationContainer}>
                        <View style={styles.iconContainer}>
                            <Message fill={colors.secondarypalColor} width='30' height='30' />
                        </View>
                        <Text style={styles.notificationtext}>Tienes un mensaje de "Nombre de la empresa"</Text>
                    </View>
                    <View style={styles.notificationContainer}>
                        <View style={styles.iconContainer}>
                            <XMarckRounded  fill="none" strokeWidth={1.5} stroke={colors.principalRed} width='30' height='30' />
                        </View>
                        <Text style={styles.notificationtext}>A finalizado tu proceso en la vacante  "Dolo Lorem Ipsum"</Text>
                    </View>
                    
                </View>
            </ScrollView>
        </Layout>
    );
}

export default Notifications;