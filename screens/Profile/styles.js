import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    generalContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column",
        flex: 1,
        paddingBottom: 10
    },
    principalContainer: {
        padding: 20,
    },
    title:{
        fontFamily: 'Nunito-Bold',
        fontSize: 25,
        textAlign: 'center',
        color: '#191010',
        width:'100%',
        borderBottomWidth: 8,
        textAlign:'left',
        borderColor: colors.principalPink,
        backgroundColor:'#fff',
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    input: {
        marginVertical: 0,
        borderBottomWidth: 2,
        paddingVertical: 10,
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
    formContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor:'#fff'
    },
    gender: {
        height: 48,
        padding: 1,
        marginBottom: 12,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#F0F0F2',
        borderBottomWidth: 2,
        borderColor: colors.principalColor
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
        borderBottomColor: colors.secondarypalColor,
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
        borderColor: colors.secondarypalColor
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
        color: '#6A6A6A',
        fontSize: 17,
        fontFamily: 'Nunito-Bold',
    },
    skillContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        paddingHorizontal: 20,
        backgroundColor:'#fff',
        border: "1px solid #red"
    },
    experienceContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 5,
        paddingHorizontal: 20,
        backgroundColor:'#fff',
        border: "1px solid #red",
        width: '100%'
    },
    skilText: {
        fontSize: 18,
        paddingVertical: 5,
        fontFamily: 'Nunito-Bold'
    },
    checkboxContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    deleteButtonExperience:{
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
    deleteButton: {
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
    uploadPictureButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        paddingVertical: 20,
    },
    uploadPictureLabel: {
        marginVertical: 10,
        color: '#6A6A6A',
        fontSize: 15,
        fontFamily: 'Nunito-Bold',
    }
});