import { useState } from "react";

const useInputList = () => {

    const [list, setList] = useState([]);
    const [suggestions, setSuggestions] = useState([])

    const handleAddItemToList = (item) => {
        setList([...list, item])
    }

    return {
        handleAddItemToList,
        list,
        suggestions
    }
}

export default useInputList;