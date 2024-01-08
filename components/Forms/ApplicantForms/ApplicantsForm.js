import { Formik } from 'formik';
import InputText from "../../InputText"
import {
    Text,
    View,
    TouchableHighlight,
} from "react-native";
import Select from '../../Select/Select';
import useApplicantsForm from './hooks/useApplicantsForm';
import { CreateAccountUserSchema, CreateAccountCompanySchema } from '../../../tools/schemaValidation';

const ApplicantsForms = (props) => {
    const {
        styles,
        handleShowForm,
        isBussines,
    } = props;

    const schemaValidation = isBussines ? CreateAccountCompanySchema : CreateAccountUserSchema;

    const {
        handleSubmit,
        genders
    } = useApplicantsForm();

    return (
        <Formik
            initialValues={{ isBussines }}
            onSubmit={values => {
                handleSubmit(values)
            }}
            validationSchema={schemaValidation}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
                return(
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
                            onBlur={handleBlur('name')}
                            value={values.name}
                            error={errors.name}
                        />
                        <InputText
                            label='Apellido(s)'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                            error={errors.lastName}
                        />
                        <Select
                            label='Genero'
                            labelStyles={styles.label}
                            selectStyles={styles.gender}
                            items={genders}
                            onChange={handleChange('gender')}
                            onBlur={handleBlur('gender')}
                            value={values.gender}
                            error={errors.gender}
                        />
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
                        {isBussines ? <InputText
                            label='Nombre de la empresa'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                            placeholder="Nombre de la empresa"
                            onChangeText={handleChange('bussinesName')}
                            onBlur={handleBlur('bussinesName')}
                            value={values.bussinesName}
                            error={errors.bussinesName}
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
                            error={errors.password}
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
                            error={errors.passwordConfirmation}
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
                )
            }}
        </Formik>
    );
}

export default ApplicantsForms;