import { StyleSheet } from 'react-native';
import colors from '../../src/assets/colors'

export default StyleSheet.create({
    principalContainer: {
        padding: 20,
        height: '100%',
        flex: 1,
    },
    scrollViewContainer: {
        height: '100%',
        flex: 1,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#fff',
        minHeight: '100%',
        flex: 1,
        padding: 10,
        borderRadius: 10
    },
    logo: {
        width: '100%',
        height: 40,
        resizeMode: 'contain'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        width: 40,
        paddingVertical: 5,
        marginRight: 10
    },
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
        color: '#191010',
        width: '100%',
        borderBottomWidth: 8,
        textAlign: 'left',
        borderColor: colors.principalPink,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    cargo: {
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
        paddingVertical: 5
    },

    contianerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 5
    },
    labelContainer: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        marginRight: 10
    },
    infoContainer: {
        fontFamily: 'Nunito-Medium',
        fontSize: 18
    },
    description: {
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
        paddingVertical: 8,
        maxHeight: '100%'
    },
    bussinesContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bussinesName: {
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
        paddingVertical: 5
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10
    }
})