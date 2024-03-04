import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import useSession from "../../../hooks/sessions/useSession";
import { formatDate, formatterPrice } from "../../../helpers/date";

const useSuscriptions = () => {

    const { membership, isActiveMembership, isFreeMembership } = useSession();

    const [memberships, setMemberships] = useState([]);
    const [selectedPlan, setselectedPlan] = useState(null);
    const [hasActivePlan, setHasActivePlan] = useState(false);

    const [resetValues, setResetValues] = useState(true)

    useEffect(() => {
        if(resetValues){
            const validation = isActiveMembership && !isFreeMembership;
            setHasActivePlan(validation, resetValues)
            setResetValues(false)
        }
    }, [isFreeMembership, isActiveMembership, resetValues])

    const cancelChangePlan = () => {
        setResetValues(true)
    };

    const membershipData = useMemo(() => {
        const endSub = new Date(membership.activeMembership.durations)
        return {
            end: formatDate(endSub),
            name: membership.membership.name,
            price: formatterPrice.format(membership.membership.price)
        }
    }, [membership])

    const handleRenewMembership = () => {
        const getCurrentPlan = memberships.find(membershipItem => membershipItem._id === membership.membership._id);
        setselectedPlan(getCurrentPlan);
    }

    const handleChangeMembership = () => {
        setHasActivePlan(false);
    }

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
                const response = await axios.get('https://workmatch-server-0c86658d19cb.herokuapp.com/api/auth/user/auth/app');
                const membershipsdata = response.data;
                const filterMemberships = membershipsdata.filter(membership => !membership.name.includes('free'));
                setMemberships(filterMemberships)
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
        handleCancelSelectPlan,
        membershipData,
        handleRenewMembership,
        isActiveMembership,
        handleChangeMembership,
        cancelChangePlan,
        isFreeMembership
    };
}

export default useSuscriptions;