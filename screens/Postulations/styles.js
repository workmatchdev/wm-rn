import { StyleSheet } from "react-native";
import colors from "../../src/assets/colors";

export default StyleSheet.create({
    cardList:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 20
    },
    imageContainer:{
        width: '25%'
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%'
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        height: 150,
        marginBottom: 10
    },
    dataContainer:{
        paddingHorizontal: 20,
        width: '75%'
    },
    button: {
        padding: 8,
        marginVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: colors.principalColor,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 15
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
    label: {
        marginBottom: 2,
        color: '#6A6A6A',
        fontSize: 15,
        fontFamily: 'Nunito-Bold',
        marginBottom: 10
    },
    dropDownContainer: {
        padding: 10,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        marginTop: 20
    },
    textData: {
        fontFamily: 'Nunito-Medium'
    }
})