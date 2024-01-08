import { Formik } from 'formik';
import InputText from '../../../components/InputText';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
} from "react-native";
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

const Success = () => {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.principalTitle}>
                    <Text style={styles.pricipalTitleText}>Contraseña actualizada correctamente</Text>
                </View>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../../src/img/cheque.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
                <TouchableHighlight
                    onPress={() => { navigation.navigate('Login') }}
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Regresar</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default Success;