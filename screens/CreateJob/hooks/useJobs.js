import { useEffect, useState } from "react";
import axios from "axios";
import useStoreLogin from '../../../hooks/sessions/store/useStoreLogin';
import useStoreJobs from "../../Jobs/store/useStoreJobs";

const useJobs = () => {

    const { user } = useStoreLogin();
    const {jobs, setJobs} = useStoreJobs();

    useEffect(() => {
        const getJobs = async () => {
            const response = await axios.get(`http://192.168.134.1:4000/api/jobs/${user._id}`);
            const data = response.data;
            setJobs(data);
        }
        getJobs()
    }, [])

    return {
        jobs
    };
}
 
export default useJobs;