import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    generalContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 20
    },
    logoContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    principalContainer: {
        padding: 20,
        marginBottom: 50
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
        color: '#B0B0B0',
        fontSize: 15,
        fontFamily: 'Nunito-Bold',
    },
    gender: {
        height: 40,
        padding: 1,
        marginBottom: 12,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#F0F0F2',
        borderBottomWidth: 2,
        borderColor: colors.principalColor
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 5
    },
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
        backgroundColor: colors.principalRed,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        marginTop: 10,
        padding: 20,
        marginBottom: 50
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: 20
    },
    modalOptions: {
        backgroundColor: '#fff',
        borderRadius: 10
    },
    typeRegisterContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
    },
    typeRegisterTitle: {
        fontSize: 20,
        fontFamily: 'Nunito-Bold',
        borderBottomWidth: 4,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 10,
        color: '#000',
        borderColor: colors.principalGreen,
        borderBottomColor: '#ccc',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    buttonRegisterBussines: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.principalColor,
        width: '100%',
        paddingVertical: 15,
        borderRadius: 99,
        marginBottom: 30
    },
    buttonRegisterBussinesText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 15,
    },
    buttonRegisterUser: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.secondarypalColor,
        width: '100%',
        paddingVertical: 15,
        borderRadius:99
    },
    buttonRegisterUserText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 15,
    },
    principalTitle: {
        marginTop: 5,
        marginBottom: 5,
        paddingVertical: 15
    },
    pricipalTitleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 20,
        color: '#191010',
        width: '100%',
        borderBottomWidth: 8,
        textAlign: 'left',
        borderColor: colors.principalPink,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    copyContainer:{
        marginTop: 10,
        display:'flex',
        alignItems: 'center',
        backgroundColor:colors.principalPink,
        width:'100%',
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    textWhite: {
        color: '#fff'
    },
    createAccountButtonText:{
        fontSize: 17,
        fontFamily: 'Nunito-Bold',
        textDecorationLine: "underline",
        textDecorationStyle: "double",
        textDecorationColor: "#000",
        color: colors.secondarypalColor,
        marginTop: 10
    },
    askAccontText:{
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        marginTop: 10
    },
    askAccontContinar:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});