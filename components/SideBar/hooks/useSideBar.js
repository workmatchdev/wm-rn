import useStore from "../store/store";
import useStoreLogin from "../../../hooks/sessions/store/useStoreLogin";
import { useNavigation } from "@react-navigation/native";

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
    const changeSideBarStatus = () => {
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