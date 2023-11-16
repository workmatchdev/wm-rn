import { useMemo } from "react";
import useStore from "../store/store";
import useStoreLogin from "../../../hooks/sessions/store/useStoreLogin";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Platform } from "react-native";
import RigthButtons from "../../NavigationBar/components/rigthButtons";
import LeftButtons from "../../NavigationBar/components/leftButton";

const useSideBar = () => {
    const {
        setUser,
        setToken,
    } = useStoreLogin();
    const navigation = useNavigation();
    const {
        visibleSideBar,
        setVisibleSideBar
    } = useStore()

    const route = useRoute();

    const seccionName = useMemo(() => route?.params?.seccionName, [])

    const changeSideBarStatus = () => {

        let moreOptions = {}
        if (Platform.OS === 'ios' && !visibleSideBar) {
            moreOptions = {
                title: '',
                headerRight: () => '',
                headerLeft: () => ''
            }
        }

        if (Platform.OS === 'ios' && visibleSideBar) {
            moreOptions = {
                title: seccionName,
                headerRight: () => <RigthButtons />,
                headerLeft: () => <LeftButtons />
            }
        }

        if (Platform.OS === 'android') moreOptions.headerShown = visibleSideBar 

        navigation.setOptions(moreOptions)
        setVisibleSideBar(!visibleSideBar)
    }
    const handleLogout = async () => {
        try {
            setUser(null);
            setToken(null);
            changeSideBarStatus()
            navigation.navigate('Login')
        } catch (error) {
            setError(error)
        }
    };
    return {
        handleLogout,
        changeSideBarStatus,
        visibleSideBar
    };
}

export default useSideBar;