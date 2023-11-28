import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    uploadButton: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        padding: 10,
        backgroundColor: colors.principalColor,
        borderRadius: 5,
        height: 40
    },
    cancelUploadButton: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        padding: 10,
        backgroundColor: colors.principalRed,
        borderRadius: 5,
        height: 40
    },
    buttonText: {
        color: colors.principalWhite,
        fontFamily: 'Nunito-Bold',
        fontSize: 15
    }
});