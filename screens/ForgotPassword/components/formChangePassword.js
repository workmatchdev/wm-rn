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
import { CodeSchema } from '../../../tools/schemaValidation';

const FormChangePassword = (props) => {

    const {handleValidateCode} = props;

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    code: ''
                }}
                onSubmit={values => {
                    handleValidateCode(values)
                }}
                validationSchema={CodeSchema}
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
                            <Text style={styles.pricipalTitleText}>Introduce el codigo</Text>
                        </View>
                        <InputText
                            label='Codigo'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                            onChangeText={handleChange('code')}
                            onBlur={handleBlur('code')}
                            value={values.code}
                            error={errors.code}
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

export default FormChangePassword;