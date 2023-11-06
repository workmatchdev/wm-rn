import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    principalContainer: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        paddingHorizontal: 20,
        marginVertical: 10
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
        marginBottom: 10
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
        backgroundColor:'#fff',
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
    submitButtonText: {
        color: '#FFF',
        fontSize: 18
    },
    viewMore: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.principalColor
    },
    viewMoreText: {
        color: "#fff",
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
    },
});