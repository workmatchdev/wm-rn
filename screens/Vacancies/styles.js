import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    pricipalTitle: {
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
    postulationListContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginBottom: 50
    },
    postulationContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        padding: 20
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '20%',
        height: 40,
        marginRight: 10
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    dataContainer: {
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10
    },
    button: {
        padding: 8,
        marginVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: colors.principalRed,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonMessage: {
        padding: 8,
        marginVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: colors.principalColor,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 18
    },
    postulationTitle: {
        fontSize: 20,
        fontFamily: 'Nunito-Bold',
        color: '#191010'
    },
    semiboldText: {
        fontSize: 17,
        fontFamily: 'Nunito-SemiBold',
        color: '#191010'
    },
    ligthText: {
        fontSize: 17,
        fontFamily: 'Nunito-Medium',
        color: '#191010'
    },
    statusContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    match: {
        fontSize: 15,
        marginLeft: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: 'blue',
        backgroundColor: '#63afed',
        borderRadius: 5,
        fontFamily: 'Nunito-SemiBold',
        borderWidth: 1,
        borderColor: 'blue',
        textAlign: 'center'
    },
    companyContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10
    }
});