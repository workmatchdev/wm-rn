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

    const [selectedKeyWords, setSelectedKeyWords] = useState([]);
    const [initialValues, setInitialValues] = useState(null);
    const [selectedKeyWordsSaved, setSelectedKeyWordsSaved] = useState([])

    const getSelectedKeyWords = (props) => {
        const { items, selectedItems } = props;
        const keyWords = items.map(item => {
            if (item.name === 'KeyWords') {
                const simpleKeywords = item.children.map(key => {
                    if (selectedItems.includes(key.id)) {
                        return key
                    }
                    return null
                })
                return {
                    keywords: simpleKeywords.filter(item => item)
                }
            }
            if (item.name === 'Keywords extras') {
                const extraKeywords = item.children.map(key => {
                    if (selectedItems.includes(key.id)) {
                        return key
                    }
                    return null
                })
                return {
                    extraKeywords: extraKeywords.filter(item => item)
                }
            }
        })
        setSelectedKeyWords(keyWords);
    }

    useEffect(() => {
        const getJob = async () => {
            const response = await axios.get(`http://192.168.134.1:4000/api/jobs/getJob/${jobId}`);
            const data = response.data;
            const savedKeyWords = response.data.keywords.map(word => word.id);
            const savedExtraKeyWords = response.data.extraKeywords.map(word => word.id);
            setSelectedKeyWordsSaved([...savedExtraKeyWords,...savedKeyWords])
            setInitialValues(data);
        }
        if (jobId) {
            getJob()
        }
    }, [jobId])

    const handleSubmit = async (values) => {
        try {
            const keywords = selectedKeyWords.filter(item => Object.keys(item)[0] === 'keywords')
            const extraKeywords = selectedKeyWords.filter(item => Object.keys(item)[0] === 'extraKeywords')
            const body = {
                ...values,
                company: user._id,
                keywords: keywords[0].keywords,
                extraKeywords: extraKeywords[0].extraKeywords,
            };
            const response = await axios.post('http://192.168.134.1:4000/api/jobs/create', body);
            const data = response.data;
            alert(data.msg);
            navigation.navigate("Jobs")
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const handleSubmitUpdate = async (values) => {
        try {
            const keywords = selectedKeyWords.filter(item => Object.keys(item)[0] === 'keywords')
            const extraKeywords = selectedKeyWords.filter(item => Object.keys(item)[0] === 'extraKeywords')
            const body = {
                ...values,
                company: user._id,
                keywords: keywords[0].keywords,
                extraKeywords: extraKeywords[0].extraKeywords,
            };
            const response = await axios.put(`http://192.168.134.1:4000/api/jobs/update/${jobId}`, body);
            const newValues = response.data;
            updateJob(newValues.data)
            alert(newValues.msg)
            navigation.navigate("Jobs")
        } catch (error) {
            if (error?.response?.data?.msg) {
                alert(error?.response?.data?.msg)
            } else {
                console.log(error);
                alert('Ha ocurrido un error')
            }
        }
    }

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`http://192.168.134.1:4000/api/jobs/delete/${id}`);
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
        getSelectedKeyWords,
        selectedKeyWordsSaved,
        initialValues
    };
}

export default useCreateJobs;