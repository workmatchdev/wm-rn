import { Text, View, TouchableHighlight } from "react-native";
import { LeftArrow, MenuIcon, NotificationIcon } from "../../src/assets/icons";
import { useRoute, useNavigation } from '@react-navigation/native';
import useSideBar from "../SideBar/hooks/useSideBar";
import styles from './styles'
import colors from "../../src/assets/colors";

const NavigationVar = () => {

    const { changeSideBarStatus } = useSideBar()
    const { params: { seccionName }, name } = useRoute()
    const navigation = useNavigation()

    if (name === 'Login' || name === 'CreateAccount') return null

    return (
        <View style={styles.principalContainer}>
            <View style={styles.actionContainer}>
                <TouchableHighlight
                    underlayColor="rgba(255,255,255,0)"
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <LeftArrow
                        fill={colors.principalWhite} stroke={colors.principalWhite} width='35' height='35'
                    />
                </TouchableHighlight>
            </View>
            <View style={styles.sccreenNameContainer}>
                <Text style={styles.title}>{seccionName}</Text>
            </View>
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
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <NotificationIcon fill={colors.principalWhite} stroke={colors.principalWhite} width='30' height='30' />
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default NavigationVar;