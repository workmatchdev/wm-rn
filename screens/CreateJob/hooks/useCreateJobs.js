import { useEffect, useState } from 'react';
import useStoreLogin from '../../../hooks/sessions/store/useStoreLogin';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import useStoreJobs from '../../Jobs/store/useStoreJobs';

const useCreateJobs = (props) => {

    const { jobId } = props || {};

    const { user } = useStoreLogin();
    const { deleteJob, updateJob } = useStoreJobs()
    const navigation = useNavigation();

    const [initialValues, setInitialValues] = useState(null)

    useEffect(() => {
        const getJob = async () => {
            const response = await axios.get(`http://192.168.0.21:4000/api/jobs/getJob/${jobId}`);
            const data = response.data;
            setInitialValues(data);
        }
        if (jobId) {
            getJob()
        }
    }, [jobId])

    const handleSubmit = async (values) => {
        try {
            const body = {
                ...values,
                company: user._id
            };
            const response = await axios.post('http://192.168.0.21:4000/api/jobs/create', body);
            const data = response.data;
            alert(data.msg);
            navigation.navigate("Jobs")
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const handleSubmitUpdate = async (values) => {
        try {
            const body = {
                ...values,
                company: user._id
            };
            const response = await axios.put(`http://192.168.0.21:4000/api/jobs/update/${jobId}`, body);
            const newValues = response.data;
            updateJob(newValues.data)
            alert(newValues.msg)
            navigation.navigate("Jobs")
        } catch (error) {
            if (error?.response?.data?.msg) {
                alert(error?.response?.data?.msg)
            } else {
                alert('Ha ocurrido un error')
            }
        }
    }

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`http://192.168.0.21:4000/api/jobs/delete/${id}`);
            deleteJob(id);
            alert('Trabajo eliminado correctamente')
        } catch (error) {
            alert('Ha ocurrido un error al eliminar el rol')
        }
    }
    
    return {
        handleSubmit,
        handleSubmitUpdate,
        handleDeleteItem,
        initialValues
    };
}

export default useCreateJobs;