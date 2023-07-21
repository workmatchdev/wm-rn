import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    principalContainer: {
        padding: 20,
        height: '100%'
    },
    container: {
        backgroundColor: '#fff',
        height: '100%',
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
        fontSize: 22,
        fontFamily: 'Nunito-Bold',
        paddingVertical: 8
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
        paddingVertical: 8
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
    }
})