import { useState } from "react";

const useInputserchAndAddToList = (props) => {

    const { handleSubmit } = props;

    const [items, setItems] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const onSubmit = (values) => {
        const itemToAdd = handleSubmit(values);
        setItems([...items,itemToAdd])
    }

    return {
        onSubmit,
        itemList: items,
        showMore,
        setShowMore
    };
}
 
export default useInputserchAndAddToList;