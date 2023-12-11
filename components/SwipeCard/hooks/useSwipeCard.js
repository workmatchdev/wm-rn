import { useState, useEffect } from "react";
import axios from "axios";
import useSession from "../../../hooks/sessions/useSession";
import { useIsFocused } from '@react-navigation/native';

const useSwipeCard = () => {

    const { user } = useSession();

    const [listJobsMatch, setlistJobsMatch] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);

    const isFocused = useIsFocused();

    useEffect(() => {
        const getData = async () => {
            try {
                if (!user) return null
                const response = await axios.post(`http://192.168.134.1:4000/api/jobs/getAvalibleMatchs`, {
                    userId: user._id,
                    currentPage
                });
                setlistJobsMatch(response.data.data);
            } catch (error) {
                setError(error.response.data.error);
            }
        }
        if (isFocused) getData()
    }, [currentPage, isFocused])

    const handleYup = (card) => {
        axios.post(`http://192.168.134.1:4000/api/matchs/create`, {
            job: card._id,
            user: user._id
        }).catch(error => {
            setError(error.response.data.error)
        });
    };

    const handleNope = (card) => {
        axios.post(`http://192.168.134.1:4000/api/matchs/discartJob`, {
            job: card._id,
            user: user._id
        }).catch(error => {
            setError(error.response.data.error)
        });
    };

    const cardRemoved = (index, direction, card) => {
        console.log(`Card removed ${index} ${direction}`);
    };

    return {
        error,
        listJobsMatch,
        handleYup,
        handleNope,
        cardRemoved
    };
}

export default useSwipeCard;