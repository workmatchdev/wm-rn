import { useState } from "react";
import {
    XmarkIcon,
    ChevronDown,
    SearchIcon,
    ChevronUpIcon,
    CheckMark,
    CancelIcon
} from "../../../src/assets/icons";

const useInputList = () => {


    const [selectedItems, setSelectedItems] = useState([]);

    const icon = ({ name, size = 18, style }) => {
        // flatten the styles
        const flat = StyleSheet.flatten(style)
        // remove out the keys that aren't accepted on View
        const { color, fontSize, ...styles } = flat

        let iconComponent
        // the colour in the url on this site has to be a hex w/o hash
        const iconColor = color && color.substr(0, 1) === '#' ? `${color.substr(1)}/` : ''

        const Search = (
            <SearchIcon width='30' height='30' fill='#fff' />
        );
        const Down = (
            <ChevronDown width='30' height='30' />
        );
        const Up = (
            <ChevronUpIcon width='30' height='30' />
        );
        const Close = (
            <XmarkIcon width='30' height='30' fill='#fff' />
        );
        const Check = (
            <CheckMark fill="#fff" stroke="#fff" width='30' height='30' />
        );
        const Cancel = (
            <CancelIcon width='30' height='30' fill='#fff' />
        );

        switch (name) {
            case 'search':
                iconComponent = Search
                break
            case 'keyboard-arrow-up':
                iconComponent = Up
                break
            case 'keyboard-arrow-down':
                iconComponent = Down
                break
            case 'close':
                iconComponent = Close
                break
            case 'check':
                iconComponent = Check
                break
            case 'cancel':
                iconComponent = Cancel
                break
            default:
                iconComponent = null
                break
        }
        return <View style={styles}>{iconComponent}</View>
    }

    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItems(selectedItems)
    }

    return {
        icon,
        selectedItems, 
        onSelectedItemsChange
    }
}

export default useInputList;