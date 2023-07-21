import { StyleSheet } from "react-native";

export default StyleSheet.create({
    generalContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    principalContainer: {
        padding: 20
    },
    title:{
        fontFamily: 'Nunito-Bold',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 20,
        color: '#191010',
        width:'100%',
        borderBottomWidth: 8,
        textAlign:'left',
        borderColor: '#F27649',
        backgroundColor:'#fff',
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    input: {
        marginVertical: 0,
        borderBottomWidth: 2,
        paddingVertical: 10,
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
    formContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor:'#fff'
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
    submitButtonText: {
        color: '#FFF',
        fontSize: 18
    },
    textArea: {
        height: 160,
        borderBottomWidth: 2,
        borderRadius: 5,
        backgroundColor: '#F0F0F2',
        borderBottomColor: '#446FF2',
        width: '100%',
        display: 'flex',
        justifyContent: "flex-start",
        fontFamily: 'Nunito-Medium',
        fontSize: 20
    },
    dropDown: {
        height: 40,
        padding: 2,
        marginBottom: 12,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#F0F0F2',
        borderBottomWidth: 1,
        borderColor: '#446FF2'
    },
    doubleInputsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    doubleContainer: {
        marginBottom: 15
    },
    doubleContinerInput: {
        flexBasis: '48%',
    },
    doubleLabel: {
        marginBottom: 10,
        color: '#B0B0B0',
        fontSize: 17,
        fontFamily: 'Nunito-Bold',
    }
});