import Layout from "../../components/Layout/Layout";
import { View, Text, ScrollView } from 'react-native';
import { CheckMarkRounded, Message, XMarckRounded } from "../../src/assets/icons";
import styles from "./styles";
import colors from "../../src/assets/colors";
import { formatDate } from "../../helpers/date";
import useStore from "./store/useStore";

const Notifications = () => {
    const { notifications } = useStore();

    const icon = {
        "newMatch": <CheckMarkRounded fill="none" strokeWidth={1.5} stroke={colors.principalGreen} width='30' height='30' />,
        "newPayment": <CheckMarkRounded fill="none" strokeWidth={1.5} stroke={colors.principalGreen} width='30' height='30' />,
        "limitMatches": <Message fill={colors.secondarypalColor} width='30' height='30' />,
        "noReadMessages": <Message fill={colors.secondarypalColor} width='30' height='30' />,
        "membershipFinished": <XMarckRounded fill="none" strokeWidth={1.5} stroke={colors.principalRed} width='30' height='30' />
    }

    return (
        <Layout>
            <ScrollView>
                <View style={styles.principalContainer}>
                    {notifications.map(notification => {
                        const notiDate = new Date(notification.date);
                        const date = formatDate(notiDate);
                        return (
                            <View style={styles.notificationContainer}>
                                <View style={styles.iconContainer}>
                                    {icon[notification.type]}
                                </View>
                                <Text style={styles.notificationtext}>{notification.text}</Text>
                                <Text style={styles.date}>{date}</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </Layout>
    );
}

export default Notifications;