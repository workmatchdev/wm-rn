import { useMemo } from "react";
// import axios from "../../../../config/clienteAxios";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import useStoreLogin from "../../../../hooks/sessions/store/useStoreLogin";

const useApplicantsForm = () => {
    const genders = ["Hombre", "Mujer", "Otro"];
    const { setUser, setToken, user } = useStoreLogin();
    const navigation = useNavigation();
    const initialValues = useMemo(() => {
        if (!user) return {}
        return {
            ...user,
            ...user.profile
        }
    }, [user]);

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('https://work-match-server.vercel.app/api/applicants/create', values);
            const data = response.data;
            setUser(data.user)
            setToken(data.token)
            navigation.navigate("Home")
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const handleSubmitUpdate = async (values, id) => {
        try {
            const {
                name,
                lastName,
                gender,
                email,
                address,
                phone,
                website,
                linkedin,
                description,
                userType,
                facebook,
                twitter,
                instagram,
                sector,
                bussinesName,
                employesNumberMin,
                employesNumberMax
            } = values;
            let profile = {
                address,
                phone,
                website,
                linkedin,
                description
            }
            if (userType === 'company') {
                profile = {
                    ...profile,
                    facebook,
                    twitter,
                    instagram,
                    sector,
                    bussinesName,
                    employesNumberMin,
                    employesNumberMax
                }
            }
            const data = {
                name,
                lastName,
                gender,
                email,
                profile
            }

            const response = await axios.put(`https://work-match-server.vercel.app/api/applicants/update/${id}`, data);
            const newValues = response.data;
            setUser(newValues.user)
            alert(newValues.msg)
        } catch (error) {
            if(error?.response?.data?.msg) {
                alert(error?.response?.data?.msg)
            } else {
                alert('Ha ocurrido un error')
            }
        }
    }

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`/api/applicants/delete/${id}`);
            // deleteRol(id)
        } catch (error) {
            alert('Ha ocurrido un error al eliminar el rol')
        }
    }

    return {
        handleSubmit,
        handleSubmitUpdate,
        handleDeleteItem,
        genders,
        initialValues
    };
}

export default useApplicantsForm;