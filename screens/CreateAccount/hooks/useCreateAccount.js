import { useState } from "react";

const useCreateAccount = () => {
    
    const [visibleForm, setVisibleForm] = useState(false);
    const [isBussines, seIisBussines] = useState()
    
    const handleShowForm = () => {
        setVisibleForm(!visibleForm);
    }

    return {
        visibleForm,
        isBussines,
        handleShowForm,
        seIisBussines
    };
}
 
export default useCreateAccount;