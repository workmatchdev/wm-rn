import { StyleSheet } from "react-native";
import colors from "../../src/assets/colors";

export default StyleSheet.create({
    generalContainer: {
        marginBottom: 10
    },
    inputContainer: {
        marginBottom: 10
    },
    input: {
        marginVertical: 0,
        borderBottomWidth: 2,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        borderBottomColor: colors.secondarypalColor,
        borderBottomWidth: 2,
        width: '100%',
        fontFamily: 'Nunito-Medium',
        fontSize: 20,
        backgroundColor: '#F0F0F2'
    },
    label: {
        marginBottom: 2,
        color: '#B0B0B0',
        fontSize: 17,
        fontFamily: 'Nunito-Bold',
    },
});