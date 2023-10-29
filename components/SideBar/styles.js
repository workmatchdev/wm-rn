import { StyleSheet } from "react-native";
import colors from "../../src/assets/colors";

export default StyleSheet.create({
    principalContainer: {
        position: 'absolute',
        zIndex: 9,
        width: '100%',
        backgroundColor: colors.principalColor,
        height: '100%',
        paddingRight: 8
    },
    itemContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.principalColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: colors.secondarypalColor,
        borderBottomWidth: 5
    },
    iconContainer: {
        marginRight: 10
    },
    itemText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Nunito-Medium'
    },
    head:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: colors.principalPink
    },
    headText:{
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Nunito-Bold'
    }
});