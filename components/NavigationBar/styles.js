import { StyleSheet } from "react-native";
import colors from "../../src/assets/colors";

export default StyleSheet.create({
    principalContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.principalColor,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    sccreenNameContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%'
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%'
    },
    iconContainer: {
        marginHorizontal: 5
    },
    title:{
        color: colors.principalWhite,
        fontFamily: 'Nunito-Bold',
        fontSize: 20
    }
});