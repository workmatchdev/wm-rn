import { useMemo } from "react";
// import axios from "../../../../config/clienteAxios";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import useStoreLogin from "../../../../hooks/sessions/store/useStoreLogin";



const useApplicantsForm = () => {
    const sectores = [
        "Agricultura",
        "Alimentos y bebidas",
        "Automotriz",
        "Bienes raíces",
        "Comercio minorista",
        "Construcción",
        "Consultoría",
        "Deportes",
        "Educación",
        "Energía",
        "Entretenimiento",
        "Farmacéutica",
        "Finanzas y banca",
        "Gobierno y administración pública",
        "Hotelería y turismo",
        "Industria química",
        "Industria textil y confección",
        "Ingeniería",
        "Investigación y desarrollo",
        "Logística y transporte",
        "Manufactura",
        "Medios de comunicación",
        "Minería y extracción de recursos",
        "Moda y belleza",
        "Organizaciones sin fines de lucro",
        "Publicidad y marketing",
        "Salud y medicina",
        "Seguros",
        "Servicios de TI",
        "Servicios financieros",
        "Servicios legales",
        "Servicios profesionales",
        "Telecomunicaciones"
    ]
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
    const handleUploadFile = async (props) => {
        try {
            const response = await axios.post(`https://work-match-server.vercel.app/api/applicants/uploadImage`, {
                userId: user._id,
                image: props.base64,
            });
            setUser(response.data.user);
            alert(response.data.msg)
        } catch (error) {
            console.log(error);
            alert('Ha ocurrido un error, por favor intente mas tarde')
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
            if (error?.response?.data?.msg) {
                alert(error?.response?.data?.msg)
            } else {
                alert('Ha ocurrido un error')
            }
        }
    }

    const handleUpdateSkills = async (skill) => {
        try {
            const data = { skill }
            const response = await axios.put(`https://work-match-server.vercel.app/api/applicants/update/${id}`, data);
            return response.data;
        } catch (error) {
            if (error?.response?.data?.msg) {
                alert(error?.response?.data?.msg)
            } else {
                alert('Ha ocurrido un error')
            }
        }
    }

    const handleAddSkillsInformation = async (values, route) => {
        try {
            const response = await axios.put(`https://work-match-server.vercel.app/api/applicants/${route}/${user._id}`, values);
            const data = response.data;
            return data.newSkill
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const handleDeleteSkillsInformation = async (values, route, callback) => {
        try {
            const info = {
                ...values,
                userId: user._id
            }
            await fetch(`https://work-match-server.vercel.app/api/applicants/${route}/${info.userId}/${info.skillId}`, { method: 'delete' });
            if (callback) callback()
        } catch (error) {
            console.log('error', error);
            alert(error.response.data.msg)
        }
    }

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`https://work-match-server.vercel.app/api/applicants/delete/${id}`);
            // deleteRol(id)
        } catch (error) {
            alert('Ha ocurrido un error al eliminar el rol')
        }
    }

    return {
        handleSubmit,
        handleSubmitUpdate,
        handleDeleteItem,
        handleUpdateSkills,
        handleAddSkillsInformation,
        handleDeleteSkillsInformation,
        handleUploadFile,
        genders,
        initialValues,
        sectores
    };
}

export default useApplicantsForm;