import { Formik } from 'formik';
import InputText from "../../InputText"
import {
    Text,
    View,
    TouchableHighlight,
} from "react-native";
import Select from '../../Select/Select';
const genders = ["Hombre", "Mujer", "Otro"];

const ApplicantsForms = (props) => {
    const {
        styles,
        handleShowForm,
        isBussines,
    } = props;

    return (
        <Formik
            initialValues={{ isBussines }}
            onSubmit={values => {
                // navigation.navigate('Home', { name: 'user' })
                alert(JSON.stringify(values));
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.formContainer}>
                    <View style={styles.principalTitle}>
                        <Text style={styles.pricipalTitleText}>Crear Cuenta</Text>
                    </View>
                    <InputText
                        label='Nombre'
                        inputStyles={styles.input}
                        labelStyles={styles.label}
                        styles={styles.inputContainer}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <InputText
                        label='Apellid(s)'
                        inputStyles={styles.input}
                        labelStyles={styles.label}
                        styles={styles.inputContainer}
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        value={values.lastName}
                    />
                    <Select
                        label='Genero'
                        labelStyles={styles.label}
                        selectStyles={styles.gender}
                        items={genders}
                        onChangeText={handleChange('gender')}
                        onBlur={handleBlur('gender')}
                        value={values.gender}
                    />
                    <InputText
                        label='Email'
                        inputStyles={styles.input}
                        labelStyles={styles.label}
                        styles={styles.inputContainer}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    {isBussines ? <InputText
                        label='Nombre de la empresa'
                        inputStyles={styles.input}
                        labelStyles={styles.label}
                        styles={styles.inputContainer}
                        placeholder="Nombre de la empresa"
                        onChangeText={handleChange('bussinesName')}
                        onBlur={handleBlur('bussinesName')}
                        value={values.bussinesName}
                    /> : null}
                    <InputText
                        label='Contraseña'
                        inputStyles={styles.input}
                        labelStyles={styles.label}
                        styles={styles.inputContainer}
                        password
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    <InputText
                        label='Confirmar Contraseña'
                        inputStyles={styles.input}
                        labelStyles={styles.label}
                        styles={styles.inputContainer}
                        password
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        value={values.passwordConfirmation}
                    />
                    <TouchableHighlight
                        onPress={handleSubmit}
                        style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Registrarme</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => handleShowForm()} style={styles.cancelButton}>
                        <Text style={styles.submitButtonText}>Cancelar</Text>
                    </TouchableHighlight>
                </View>
            )}

        </Formik>
    );
}

export default ApplicantsForms;