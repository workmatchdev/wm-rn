import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    pricipalTitle: {
        fontFamily: 'Nunito-Bold',
        fontSize: 25,
        textAlign: 'center',
        color: '#191010',
        width: '100%',
        borderBottomWidth: 8,
        textAlign: 'left',
        borderColor: colors.principalPink,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    postulationContainer: {
        padding: 20,
    },
    dataContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10
    },
    infoContainer: {
        width: '75%',
        padding: 10
    },
    imageContainer: {
        width: '25%',
        height: 125
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%'
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
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
    buttonText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 18
    },
    semiboldText: {
        fontSize: 17,
        fontFamily: 'Nunito-SemiBold',
        color: '#191010',
        marginVertical: 2
    },
    ligthText: {
        fontSize: 14,
        fontFamily: 'Nunito-Medium',
        color: '#191010',
        marginVertical: 2
    },
    statusContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    educationCard: {
        padding: 10,
        backgroundColor: '#fff'
    },
    match: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginVertical: 5,
        color: 'blue',
        backgroundColor: '#63afed',
        borderRadius: 5,
        fontFamily: 'Nunito-SemiBold',
        borderWidth: 1,
        borderColor: 'blue',
        textAlign: 'center',
        width: 100
    },
    statustext: {
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Nunito-Bold'
    },
    informationContainer: {
        marginTop: 20
    },
    acercaDe: {
        backgroundColor: '#fff',
        padding: 10
    }
});