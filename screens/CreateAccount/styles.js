import { StyleSheet } from "react-native";

export default StyleSheet.create({
    generalContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    principalContainer: {
        padding: 20
    },
    input: {
        marginVertical: 0,
        borderBottomWidth: 2,
        paddingVertical: 10,
        borderRadius: 5,
        borderBottomColor: '#446FF2',
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
        borderColor: '#446FF2'
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
        backgroundColor: '#F27649',
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
        paddingVertical: 50,
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
        borderColor: '#ACF216',
        borderBottomColor: '#ccc',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    buttonRegisterBussines: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#446FF2',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 99,
        marginBottom: 30
    },
    buttonRegisterBussinesText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 15,
        textTransform: 'uppercase'
    },
    buttonRegisterUser: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F27649',
        width: '100%',
        paddingVertical: 15,
        borderRadius:99
    },
    buttonRegisterUserText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 15,
        textTransform: 'uppercase'
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
        borderColor: '#F27649',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    copyContainer:{
        marginTop: 10,
        display:'flex',
        alignItems: 'center',
        backgroundColor:'#AAB7B8',
        width:'100%',
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,

    }
});