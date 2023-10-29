import { useEffect, useMemo } from "react";
import useStoreLogin from "./store/";
import { useNavigation } from '@react-navigation/native';

const useSession = () => {

    const navigation = useNavigation()

    const {
        user,
        token
    } = useStoreLogin();

    const islogged = useMemo(() => {
        return user && token ? true : false
    }, [
        user,
        token
    ])

    useEffect(() => {
        if (!islogged) navigation.navigate('Login');
    }, [islogged]);


    const isBussiness = user?.userType !== "applicant";

    return {
        user,
        token,
        islogged,
        isBussiness
    };
}

export default useSession;