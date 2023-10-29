import { StyleSheet } from "react-native";
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    pricipalTitle: {
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
        paddingHorizontal: 8,
        fontFamily: 'Nunito-Bold',
    },
    jobsListContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 60,
    },
    jobsCard: {
        borderRadius: 10,
        marginBottom: 15,
        borderRadius: 10,
        padding: 20,
        borderColor: '#CCC',
        backgroundColor: '#fff'
    },
    jobsContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
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
        backgroundColor: colors.secondarypalColor,
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
    jobTitle: {
        fontSize: 20,
        fontFamily: 'Nunito-Bold',
        color: '#191010',
        marginBottom: 7
    },
    semiboldText: {
        fontSize: 17,
        fontFamily: 'Nunito-SemiBold',
        color: '#191010',
        marginBottom: 7
    },
    ligthText: {
        fontSize: 17,
        fontFamily: 'Nunito-Medium',
        color: '#191010',
        marginBottom: 7
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 10
    },
    buttonEditContainer:{
        width: '48%'
    },
    buttonEdit: {
        display: 'flex',
        alignItems:'center',
        backgroundColor: colors.principalColor,
        padding:10,
        borderRadius: 5
    },
    buttonDelete: {
        display: 'flex',
        alignItems:'center',
        backgroundColor:colors.principalRed,
        padding:10,
        borderRadius: 5
    },
    buttonText:{
        color: '#fff',
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        textTransform: 'uppercase'
    }
});