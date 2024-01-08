import { Formik } from 'formik';
import InputText from '../../../components/InputText';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
} from "react-native";
import Select from '../../../components/Select/Select';
import styles from '../styles';
import { PasswordSchema } from '../../../tools/schemaValidation';

const ChangePassword = (props) => {
    const { handleChangePassword } = props;
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    password1: '',
                    password2: ''
                }}
                onSubmit={values => {
                    handleChangePassword(values)
                }}
                validationSchema={PasswordSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.formContainer}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={require('../../../src/img/logo.png')}
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                        <View style={styles.principalTitle}>
                            <Text style={styles.pricipalTitleText}>Cambiar contraseña</Text>
                        </View>
                        <InputText
                            label='Contraseña'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                            onChangeText={handleChange('password1')}
                            onBlur={handleBlur('password1')}
                            value={values.password1}
                            error={errors.password1}
                        />
                        <InputText
                            label='Confirmar contraseña'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                            onChangeText={handleChange('password2')}
                            onBlur={handleBlur('password2')}
                            value={values.password2}
                            error={errors.password2}
                        />
                        <TouchableHighlight
                            onPress={handleSubmit}
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Validar</Text>
                        </TouchableHighlight>
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default ChangePassword;