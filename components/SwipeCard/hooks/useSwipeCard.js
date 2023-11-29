import { useState, useEffect } from "react";
import axios from "axios";
import useSession from "../../../hooks/sessions/useSession";
import { useIsFocused } from '@react-navigation/native';

const useSwipeCard = () => {

    const { user } = useSession();

    const [listJobsMatch, setlistJobsMatch] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const isFocused = useIsFocused();

    useEffect(() => {
        const getData = async () => {
            if(!user) return null
            console.log({
                userId: user._id , 
                currentPage
            });
            const response = await axios.post(`http://192.168.134.1:4000/api/jobs/getAvalibleMatchs`,{
                userId: user._id , 
                currentPage
            });
            setlistJobsMatch(response.data.data);
        }
        if(isFocused)getData()
    }, [currentPage,isFocused])
    

    return {
        listJobsMatch
    };
}
 
export default useSwipeCard;