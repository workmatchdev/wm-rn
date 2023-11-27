import { useState } from "react";

const useInputserchAndAddToList = (props) => {

    const { handleSubmit, defaultItems } = props;

    const [items, setItems] = useState(defaultItems);
    const [showMore, setShowMore] = useState(false);

    const onSubmit = async (values,action) => {
        const itemToAdd = await handleSubmit(values,action);
        if(itemToAdd) setItems([...items,itemToAdd])
    }

    const deleteItem = (id) => {
        const filterItems = items.filter(item => item.id !== id);
        setItems(filterItems);
    }

    return {
        onSubmit,
        itemList: items,
        showMore,
        setShowMore,
        deleteItem
    };
}
 
export default useInputserchAndAddToList;