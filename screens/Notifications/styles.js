import { StyleSheet } from "react-native";
import colors from "../../src/assets/colors";

export default StyleSheet.create({
    principalContainer: {
        padding: 10
    },
    notificationContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginBottom: 6,
        borderRadius: 5,
        minHeight: 80,
        position: 'relative'
    },
    notificationtext: {
        fontFamily: 'Nunito-SemiBold',
        marginLeft: 10,
        flexWrap: 'wrap',
        width: '90%'
    },
    iconContainer: {
        width: '10%'
    },
    date: {
        position: 'absolute',
        bottom: 5,
        right: 5
    }
})