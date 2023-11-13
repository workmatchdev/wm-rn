import { StyleSheet } from 'react-native';
import colors from '../../../../src/assets/colors';

export default StyleSheet.create({
    scrollViewConatiner: {
        flex: 1,
        height: '100%',
    },
    chatUser:{
        padding: 10,
        textAlign: 'center',
        backgroundColor: colors.principalColor,
        color: '#fff',
        borderBottomWidth: 5,
        borderColor: colors.principalPink,
        fontFamily: 'Nunito-Bold'
    },
    list:{
        display:'flex',
        justifyContent: 'flex-end',
    },
    generalContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    principalcontainer:{
        padding: 10
    },
    inputContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.principalColor,
        width: '100%',
    },
    input:{
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: colors.principalWhite,
        width: '85%'
    },
    sendButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: colors.principalPink,
        width: '15%',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    messagesContainer:{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    messageContainerUser:{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        padding: 10,
    },
    messageContainerSender:{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 10,
    },
    messageContentUser: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    messageContentSender: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    messageUser:{
        backgroundColor: colors.principalPink,
        padding: 10,
        borderRadius: 10,
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        maxWidth: '90%',
        minWidth: 70
    },
    messageSender:{
        backgroundColor: colors.principalColor,
        padding: 10,
        borderRadius: 10,
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        maxWidth: '90%',
        minWidth: 70
    },
    time:{
        fontSize: 13,
    },
    timeSender:{
        fontSize: 13,
    }
})