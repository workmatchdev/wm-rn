import { StyleSheet } from "react-native";

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
        borderColor: '#F27649',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    postulationListContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
    postulationCard: {
        borderRadius: 10,
        marginBottom: 15,
        borderRadius: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    },
    postulationContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 20
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '25%',
    },
    logo: {
        width: '100%',
        height: 90,
        resizeMode: 'contain'
    },
    dataContainer: {
        paddingHorizontal: 20,
        width: '75%'
    },
    button: {
        padding: 8,
        marginVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#F27649',
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
    }
});