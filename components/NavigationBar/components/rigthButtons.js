import { View, TouchableHighlight } from 'react-native';
import styles from '../styles';
import { MenuIcon, NotificationIcon } from '../../../src/assets/icons';
import colors from '../../../src/assets/colors';
import useSideBar from '../../SideBar/hooks/useSideBar';
import { useNavigation } from "@react-navigation/native";

const RigthButtons = () => {
    const { changeSideBarStatus } = useSideBar();
    const navigation = useNavigation();
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
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <NotificationIcon fill={colors.principalWhite} stroke={colors.principalWhite} width='30' height='30' />
                </TouchableHighlight>
            </View>
     );
}
 
export default RigthButtons;