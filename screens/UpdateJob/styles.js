import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    generalContainer: {
        padding: 20,
        marginBottom: 50
    },
    inputContainer: {
        marginBottom: 15
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
        backgroundColor:'#F0F0F2'
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 5
    },
    textArea: {
        height: 160,
        borderBottomWidth: 2,
        borderRadius: 5,
        backgroundColor: '#F0F0F2',
        borderBottomColor: colors.secondarypalColor,
        width: '100%',
        display: 'flex',
        justifyContent: "flex-start",
        fontFamily: 'Nunito-Medium',
        fontSize: 18
    },
    label: {
        marginBottom: 1,
        color: '#B0B0B0',
        fontSize: 15,
        fontFamily: 'Nunito-Bold',
    },
    saveButton: {
        height: 45,
        marginVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 99,
        backgroundColor: colors.principalColor,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 18
    },
    principalTitle: {
        marginBottom: 15
    },
    pricipalTitleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 20,
        color: '#191010',
        width:'100%',
        borderBottomWidth: 8,
        textAlign:'left',
        borderColor: colors.principalPink,
        backgroundColor:'#fff',
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    salaryInputsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    salaryContainer: {
        marginBottom: 10
    },
    salaryContinerInput: {
        flexBasis: '48%',
    },
    salaryLabel: {
        marginBottom: 10,
        color: '#B0B0B0',
        fontSize: 15,
        fontFamily: 'Nunito-Bold',
    }

});