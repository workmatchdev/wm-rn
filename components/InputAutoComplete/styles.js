import { StyleSheet } from 'react-native';
import colors from '../../src/assets/colors';

export default StyleSheet.create({
    principalContainer: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        padding: 20
    },
    content: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#fff',
        flex: 1,
        height: '100%',
        paddingHorizontal: 15,
        paddingTop: 20,
        position: 'relative'
    },
    closeButton: {
        position: 'absolute',
        right: 5,
        top: 5,
    },
    principalInputContainer: {
        position: 'relative',

    },
    principalInputButton: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0)',
        height: '100%',
        width: '100%',
        zIndex: 9
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
    textButton: {
        color: '#fff',
        fontSize: 18
    },
    autoCompleteContainer: {
        marginTop: 10
    },
    skillsContainer:{

    },
    skillContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50
    },
    selectButton: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.principalPink,
        width: 35,
        height: 35,
        borderRadius: 5
    },
    skillTitle: {
        fontFamily: 'Nunito-Bold',
        color: '#000',
        fontSize: 17
    }
})