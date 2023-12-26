import { useState, useEffect } from "react";
import axios from "axios";
import useSession from "../../../hooks/sessions/useSession";
import { useIsFocused } from '@react-navigation/native';

const useSwipeCard = ({
    currentJob
}) => {

    const { user, isBussiness } = useSession();

    const [listJobsMatch, setlistJobsMatch] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);
    const [openNewModal, setOpenNewModal] = useState(false)
    const [getCards, setGetCards] = useState(true);

    const isFocused = useIsFocused();

    const onCloseNewMatchModal = () => {
        setOpenNewModal(false);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                if (!user) return null
                const url = isBussiness ? '/applicants/getApplicants/matchs' : '/jobs/getAvalibleMatchs';
                const body = {
                    userId: user._id,
                    currentPage
                };
                if (isBussiness) {
                    body.jobId = currentJob;
                }
                const response = await axios.post(`http://192.168.134.1:4000/api${url}`, body);
                setlistJobsMatch(response.data.data);
                setGetCards(false);
            } catch (error) {
                setError(error.response.data.error);
                setGetCards(false);
            }
        }
        if (isFocused && getCards) getData()
    }, [currentPage, isFocused, isBussiness, currentJob, getCards])

    const handleYup = (card) => {
        const body = {}
        if (isBussiness) {

            body.job = currentJob;
            body.userMatch = card._id;
            body.company = user._id;
        } else {
            body.job = card._id
            body.user = user._id;
        }
        axios.post(`http://192.168.134.1:4000/api/matchs/create`, body)
            .then((response) => {
                setOpenNewModal(response.data.newMatch);
            })
            .catch(error => {
                setError(error.response.data.error)
            });
    };

    const handleNope = (card) => {
        axios.post(`http://192.168.134.1:4000/api/matchs/discartJob`, {
            job: card._id,
            user: user._id
        })
            .catch(error => {
                setError(error.response.data.error)
            });
    };

    const cardRemoved = (index, direction, card) => {
        // console.log(`Card removed ${index} ${direction}`);
    };

    return {
        error,
        openNewModal,
        listJobsMatch,
        handleYup,
        handleNope,
        cardRemoved,
        setGetCards,
        onCloseNewMatchModal,
    };
}

export default useSwipeCard;