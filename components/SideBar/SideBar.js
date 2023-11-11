import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Item from './components/item';
import {
    HomeIcon,
    JobIcon,
    ProfileIcon,
    LogOutIcon,
    PlusIcon,
    PostulationsIcon,
    SearchIcon,
    MoneyIcon,
    XmarkIcon,
    NotificationIcon,
    MessageIcon
} from '../../src/assets/icons';
import useSideBar from './hooks/useSideBar';
import { useNavigation } from '@react-navigation/native';
import useSession from '../../hooks/sessions/useSession';

const SideBar = () => {

    const { changeSideBarStatus, visibleSideBar, handleLogout } = useSideBar();
    const navigation = useNavigation()

    const { isBussiness } = useSession();

    if (!visibleSideBar) return null

    return (
        <View style={styles.principalContainer}>
            <View style={styles.head}>
                <Text style={styles.headText}>Menu</Text>
                <TouchableHighlight
                    underlayColor="rgba(255,255,255,0)"
                    onPress={() => changeSideBarStatus()}
                >
                    <XmarkIcon width='30' height='30' fill='#fff' />
                </TouchableHighlight>
            </View>
            {/* <Item
                route='Notifications'
                text={'Notificaciones'}
                icon={<NotificationIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            /> */}
            <Item
                route='Home'
                text={'Inicio'}
                icon={<HomeIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            />
            <Item
                route='Profile'
                text={'Perfil'}
                icon={<ProfileIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            />
            {/* <Item
                route='Matchs'
                text={'Matchs'}
                icon={<SearchIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            /> */}
            {isBussiness && <Item
                route='Postulations'
                text={'Postulantes'}
                icon={<PostulationsIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            />
            }
            <Item
                route='Subscriptions'
                text={'Membresia'}
                icon={<MoneyIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            />
            {!isBussiness && <Item
                route='MyPostulations'
                text={'Mis postulaciones'}
                icon={<PostulationsIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            />}
            {isBussiness && <Item
                route='CreateJob'
                text={'Crear trabajo'}
                icon={<PlusIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            />}
            {isBussiness && <Item
                route='Jobs'
                text={'Trabajos'}
                icon={<JobIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            />}
            <Item
                route='Chats'
                text={'Chats'}
                icon={<MessageIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            />
            <Item
                route='Chat'
                text={'Chat'}
                icon={<MessageIcon width='30' height='30' fill='#fff' />}
                onPress={() => changeSideBarStatus()}
            />
            <Item
                text='Cerrar Sesion'
                icon={<LogOutIcon width='30' height='30' fill='#fff' />}
                onPress={() => handleLogout()}
            />
        </View>
    );
}

export default SideBar;