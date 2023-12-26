import { useEffect, useState } from "react";
import axios from "axios";

const useGetAutoCompleteData = () => {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [result, setResult] = useState([]);

    const resetValues = () => {
        setResult([])
        setQuery('')
        setLoading(false)
        setError(null)
    }

    // Función para realizar la búsqueda
    const searchAPI = async (searchQuery) => {
        try {
            if (!searchQuery || searchQuery.trim() === '' || !searchQuery) {
                resetValues()
                return
            }
            const response = await axios.get(`http://192.168.134.1:4000/api/jobs/skills/${searchQuery}`);
            setResult(response.data.skills);
            setLoading(false)
            setError(null)
        } catch (error) {
            // Manejar errores si la solicitud falla
            setError('Ha ocurrido un error')
            console.error('Error fetching data:', error.data);
        }
    };

    // Función para manejar el cambio en el input
    const handleInputChange = (value) => {
        const inputValue = value;
        setQuery(inputValue);
        searchAPI(inputValue)
    };

    return {
        handleInputChange,
        query,
        result,
        loading,
        error,
        resetValues
    };
}

export default useGetAutoCompleteData;