import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import InputText from '../../components/InputText'
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import styles from './styles';
import InputFile from '../../components/InputFile';
import { Formik } from 'formik';
import useApplicantsForm from '../../components/Forms/ApplicantForms/hooks/useApplicantsForm';


const BussinesProfile = () => {
    const { initialValues, handleSubmitUpdate, handleUploadFile, sectores } = useApplicantsForm();
    return (
        <Layout>
            <View style={styles.generalContainer}>
                <ScrollView>
                    <View style={styles.principalContainer}>
                        <View style={styles.formContainer}>
                            <Text style={styles.title}>Foto de perfil</Text>
                            <InputFile
                                label='Subir foto de perfil'
                                inputStyles={styles.uploadPictureButton}
                                labelStyles={styles.uploadPictureLabel}
                                styles={styles.inputContainer}
                                uploadFile={handleUploadFile}
                                initialValue={initialValues.image}
                            />
                        </View>
                    </View>
                    <View style={styles.principalContainer}>
                        <View style={styles.formContainer}>
                            <Text style={styles.title}>Tu perfil</Text>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={async (values, actions) => {
                                    await handleSubmitUpdate(values, initialValues._id)
                                    actions.setTouched({})
                                }}
                            >
                                {({ handleChange, handleBlur, handleSubmit, handleReset, values, touched }) => {
                                    const isBeingEdited = Object.values(touched).length;
                                    return (
                                        <>
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Nombre'
                                                labelStyles={styles.label}
                                                value={values.name}
                                                onChangeText={handleChange('name')}
                                                onBlur={handleBlur('name')}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Apellidos'
                                                labelStyles={styles.label}
                                                value={values.lastName}
                                                onChangeText={handleChange('lastName')}
                                                onBlur={handleBlur('lastName')}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Nombre de empresa'
                                                labelStyles={styles.label}
                                                value={values.bussinesName}
                                                onChangeText={handleChange('bussinesName')}
                                                onBlur={handleBlur('bussinesName')}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Direccion'
                                                labelStyles={styles.label}
                                                value={values.address}
                                                onChangeText={handleChange('address')}
                                                onBlur={handleBlur('address')}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Telefono'
                                                labelStyles={styles.label}
                                                onChangeText={handleChange('phone')}
                                                onBlur={handleBlur('phone')}
                                                value={values.phone}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Email'
                                                labelStyles={styles.label}
                                                placeholder='jhondoe.example.com'
                                                value={values.email}
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Sitio Web'
                                                labelStyles={styles.label}
                                                placeholder='www.example.com'
                                                value={values.website}
                                                onChangeText={handleChange('website')}
                                                onBlur={handleBlur('website')}
                                            />
                                            <View style={styles.doubleContainer}>
                                                <Text style={styles.doubleLabel}>Numero de empleado</Text>
                                                <View style={styles.doubleInputsContainer}>
                                                    <InputText
                                                        styles={styles.doubleContinerInput}
                                                        inputStyles={styles.input}
                                                        placeholder='Max'
                                                        value={values.employesNumberMax}
                                                        onChangeText={handleChange('employesNumberMax')}
                                                        onBlur={handleBlur('employesNumberMax')}
                                                    />
                                                    <InputText
                                                        styles={styles.doubleContinerInput}
                                                        inputStyles={styles.input}
                                                        placeholder='Min'
                                                        value={values.employesNumberMin}
                                                        onChangeText={handleChange('employesNumberMin')}
                                                        onBlur={handleBlur('employesNumberMin')}
                                                    />
                                                </View>
                                            </View>
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Facebook'
                                                labelStyles={styles.label}
                                                value={values.facebook}
                                                onChangeText={handleChange('facebook')}
                                                onBlur={handleBlur('facebook')}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Twitter'
                                                labelStyles={styles.label}
                                                value={values.twitter}
                                                onChangeText={handleChange('twitter')}
                                                onBlur={handleBlur('twitter')}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Instagram'
                                                labelStyles={styles.label}
                                                value={values.instagram}
                                                onChangeText={handleChange('instagram')}
                                                onBlur={handleBlur('instagram')}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                inputStyles={styles.input}
                                                label='Linkedin'
                                                labelStyles={styles.label}
                                                value={values.linkedin}
                                                onChangeText={handleChange('linkedin')}
                                                onBlur={handleBlur('linkedin')}
                                            />
                                            <Select
                                                label='Sector'
                                                labelStyles={styles.label}
                                                selectStyles={styles.dropDown}
                                                items={sectores}
                                                value={values.sector}
                                                onChange={handleChange('sector')}
                                                onBlur={handleBlur('sector')}
                                            />
                                            <InputText
                                                styles={styles.inputContainer}
                                                labelStyles={styles.label}
                                                inputStyles={styles.textArea}
                                                label='Breve descripdcion'
                                                multiline={true}
                                                numberOfLines={6}
                                                value={values.description}
                                                onChangeText={handleChange('description')}
                                                onBlur={handleBlur('description')}
                                            />
                                            <Button
                                                textStyle={styles.submitButtonText}
                                                style={styles.submitButton}
                                                title='Guardar'
                                                onPress={() => {
                                                    handleSubmit()
                                                }}
                                            />
                                            {isBeingEdited ? (
                                                <TouchableHighlight
                                                    onPress={() => { handleReset() }}
                                                    style={styles.cancelButton}>
                                                    <Text style={styles.submitButtonText}>Cancelar</Text>
                                                </TouchableHighlight>
                                            ) : null}
                                        </>
                                    )
                                }}

                            </Formik>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Layout>
    );
}

export default BussinesProfile;