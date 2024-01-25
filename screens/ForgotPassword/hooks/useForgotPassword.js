import { useState } from "react";
import axios from "axios";

const useForgotPassword = () => {

    const [step, setStep] = useState(0);
    const [email, setEmail] = useState(null);
    const [userId, setUserId] = useState(null)

    const handleChangePassword = async (values) => {
        try {
            await axios.post('https://workmatch-server-0c86658d19cb.herokuapp.com/api/changePassword/changePassword', {...values, id: userId});
            setStep(3)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const handleValidateCode = async (values) => {
        try {
            const response = await axios.post('https://workmatch-server-0c86658d19cb.herokuapp.com/api/changePassword/validateCode', { ...values, email });
            const data = response.data;
            alert(data.message);
            setStep(2)
        } catch (error) {
            alert('Ha ocurrido un error al validar el codigo');
        }
    }

    const handleValidateEmail = async (values) => {
        try {
            const response = await axios.post('https://workmatch-server-0c86658d19cb.herokuapp.com/api/changePassword/validateEmail', { ...values });
            const data = response.data;
            setEmail(data.user.email);
            setUserId(data.user._id);
            alert(data.message);
            setStep(1)
        } catch (error) {
            alert('Ha ocurrido un error al validar el correo');
        }
    }

    const resendEmail = async (values) => {
        try {
            const response = await axios.post('https://workmatch-server-0c86658d19cb.herokuapp.com/api/changePassword/changePassword', values);
            const data = response.data;
        } catch (error) {
            alert('Ha ocurrido un error al reenviar el codigo');
        }
    }

    return {
        step,
        resendEmail,
        handleValidateCode,
        handleValidateEmail,
        handleChangePassword
    };
}

export default useForgotPassword;