import { useEffect, useState } from "react";
import axios from "axios";

const useSuscriptions = () => {

    const [memberships, setMemberships] = useState([]);
    const [selectedPlan, setselectedPlan] = useState(null);
    const [hasActivePlan, sethasActivePlan] = useState(false);

    function calculateTotal(price, discount) {
        if (typeof price !== 'number' || typeof discount !== 'number' || price < 0 || discount < 0) {
            throw new Error('El precio y el descuento deben ser números positivos.');
        }
        const discountAmount = (price * discount) / 100;
        const total = price - discountAmount;
        return Math.round(total * 100) / 100;
    }

    const handleSelectPlan = (data) => {
        setselectedPlan(data)
    }

    const handleCancelSelectPlan = (data) => {
        setselectedPlan(null)
    }

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('https://work-match-server.vercel.app/api/memberships/');
                const users = response.data;
                setMemberships(users)
            } catch (error) {
                setError('Ha ocurrido un error al obtner los usuarios')
            }
        }
        getUsers()
    }, [])

    return {
        selectedPlan,
        memberships,
        calculateTotal,
        handleSelectPlan,
        hasActivePlan,
        handleCancelSelectPlan
    };
}

export default useSuscriptions;