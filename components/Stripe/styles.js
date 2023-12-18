import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    submitButton: {
        height: 45,
        marginVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: colors.principalColor,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButton: {
        height: 45,
        marginVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#F74B4B',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: 18
    },
    errorContainer:{
        backgroundColor: '#EE2B2B',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        marginVertical: 5,
    },
    successButton: {
        height: 45,
        marginVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: colors.principalColor,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelButton: {
        height: 45,
        marginVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#F74B4B',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    succesMessage: {
        backgroundColor: colors.principalGreen,
        textAlign: 'center',
        padding: 5,
        borderRadius: 5,
        marginVertical: 5,
        color: '#fff',
        fontSize: 16
    },
    errorText: {
        fontFamily: 'Nunito-Bold',
        color: '#fff',
        textAlign: 'center'
    }
});