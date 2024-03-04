import { StyleSheet } from "react-native";
import colors from "../../src/assets/colors";

export default StyleSheet.create({
    generalContainer: {
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20
    },
    principalContainer: {
        padding: 20,
        marginBottom: 50
    },
    logoContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    input: {
        marginVertical: 0,
        borderBottomWidth: 2,
        paddingVertical: 10,
        borderRadius: 5,
        borderBottomColor: colors.secondarypalColor,
        borderBottomWidth: 2,
        width: '100%',
        fontFamily: 'Nunito-Medium',
        fontSize: 18,
        backgroundColor: '#F0F0F2'
    },
    inputContainer: {
        marginBottom: 20
    },
    label: {
        marginBottom: 2,
        color: '#6A6A6A',
        fontSize: 15,
        fontFamily: 'Nunito-Bold',
    },
    submitButton: {
        height: 45,
        marginVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: colors.principalPink,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: 20
    },
    typeRegisterTitle: {
        fontSize: 20,
        fontFamily: 'Nunito-Bold',
        borderBottomWidth: 4,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 10,
        color: '#FFF',
        borderColor: colors.principalGreen,
        borderBottomColor: '#ccc',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: colors.principalColor
    },
    createAccountButtonText:{
        fontSize: 17,
        fontFamily: 'Nunito-Bold',
        textDecorationStyle: "double",
        textDecorationColor: "#000",
        color: colors.secondarypalColor,
        marginTop: 5,
        width: '100%',
        textAlign: 'center',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.principalColor,
        borderRadius: 5
    },
    askAccontText:{
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        marginTop: 5,
        textAlign: 'center'
    },
    askAccontContinar:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        width: '100%',
    }
})