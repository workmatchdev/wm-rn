import { useMemo } from 'react';
import { View, TouchableHighlight } from 'react-native';
import styles from '../styles';
import { MenuIcon, NotificationIcon, ActiveBell } from '../../../src/assets/icons';
import colors from '../../../src/assets/colors';
import useSideBar from '../../SideBar/hooks/useSideBar';
import { useNavigation } from "@react-navigation/native";
import useStore from '../../../screens/Notifications/store/useStore';
import axios from 'axios';
import useSession from '../../../hooks/sessions/useSession';

const RigthButtons = () => {
    const { changeSideBarStatus } = useSideBar();
    const navigation = useNavigation();
    const { notifications, setNotifications } = useStore();
    const hasNoReadItems = useMemo(() => {
        return notifications.some(notification => !notification.review)
    }, [notifications])
    const {user} = useSession();

    const updateManyNotifications = async () => {
        try {
            await axios.put(`https://workmatch-server-0c86658d19cb.herokuapp.com/api/notifications/update/${user._id}`)
            const update = notifications.map(notification => {
                notification.review = true
                return notification
            })
            console.log(update);
            setNotifications(update)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.actionContainer} >
            <TouchableHighlight
                style={styles.iconContainer}
                underlayColor="rgba(255,255,255,0)"
                onPress={() => changeSideBarStatus()}
            >
                <MenuIcon fill={colors.principalWhite} stroke={colors.principalWhite} width='35' height='35' />
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="rgba(255,255,255,0)"
                onPress={async () => {
                    await updateManyNotifications()
                    navigation.navigate('Notifications')
                }}
            >
                {hasNoReadItems ? (
                    <ActiveBell fill={colors.principalPink} stroke={colors.principalPink} width='30' height='30' />
                ) : (
                    <NotificationIcon fill={colors.principalWhite} stroke={colors.principalWhite} width='30' height='30' />
                )}
            </TouchableHighlight>
        </View>
    );
}

export default RigthButtons;