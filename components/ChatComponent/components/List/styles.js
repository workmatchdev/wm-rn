import { StyleSheet } from 'react-native';
import colors from '../../../../src/assets/colors';

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
    principalcontainer: {
        padding: 10
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: colors.principalColor,
    },
    imageContainer: {
        overflow: 'hidden',
        borderRadius: 10
    },
    column1: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    column1Text: {
        paddingHorizontal: 10
    },
    info: {
        position: 'relative'
    },
    newMessage: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.principalColor,
        width: 25,
        height: 25,
        borderRadius: 50,
        top: 25,
        left: '65%',
        position: 'absolute'
    },
    newMessageText: {
        textAlign: 'center',
        fontFamily: 'Nunito-Semibold',
        fontSize: 18
    },
    conuterText: {
        color: "#fff",
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',
        fontSize: 18
    },
    name: {
        color: "#000",
        fontSize: 18,
        fontFamily: 'Nunito-Bold'
    },

})