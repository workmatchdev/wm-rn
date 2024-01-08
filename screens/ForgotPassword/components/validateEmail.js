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
import { CodeEmailSchema } from '../../../tools/schemaValidation';

const ValidateEmail = (props) => {

    const { handleValidateEmail } = props;

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    email: ''
                }}
                onSubmit={values => {
                    handleValidateEmail(values)
                }}
                validationSchema={CodeEmailSchema}
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
                            <Text style={styles.pricipalTitleText}>Introduce tu correo</Text>
                        </View>
                        <InputText
                            label='Email'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                        />
                        <TouchableHighlight
                            onPress={handleSubmit}
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Enviar codigo</Text>
                        </TouchableHighlight>
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default ValidateEmail;