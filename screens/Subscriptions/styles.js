import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    scrollViewConatiner: {
        flex: 1,
        height: '100%',
    },
    generalContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    principalContainer: {
        flex: 1,
        height: '100%',
        padding: 20
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    title: {
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
        backgroundColor: '#fff',
        height: '100%'
    },
    avaliblePlans: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    paymentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        height: '100%'
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
        marginVertical: 5,
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
    /*** -------------------------- */

    activeSubscriptionContianerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    labelSubscription: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        marginRight: 10
    },
    infoSubscription: {
        fontFamily: 'Nunito-Medium',
        fontSize: 18
    },

    /** Avalible plans */
    plan: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignContent: 'flex-start',
        padding: 10,
        width: '100%',
        marginRight: '5%',
        borderRadius: 5,
        backgroundColor: '#f2f2f2',
        height: '100%'
    },
    planName: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
        borderBottomWidth: 2,
        paddingBottom: 5
    },
    selectedPlanName: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        color: '#000',
        marginBottom: 10
    },
    featureAvailable: {
        fontFamily: 'Nunito-Medium',
        fontSize: 17,
        paddingLeft: 10
    },
    price: {
        marginVertical: 5
    },
    description: {
        fontSize: 15,
        fontFamily: 'Nunito-Medium',
        padding: 10
    },
    modalContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        paddingHorizontal: 10
    },
    disabled: {
        opacity: 0.8, // Cambia la opacidad para indicar que está deshabilitado
    },
});