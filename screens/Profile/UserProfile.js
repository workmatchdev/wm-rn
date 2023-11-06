import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import InputText from '../../components/InputText'
import Layout from '../../components/Layout/Layout';
import styles from './styles';
import InputFile from '../../components/InputFile/InputFile';
import useApplicantsForm from '../../components/Forms/ApplicantForms/hooks/useApplicantsForm';
import Select from '../../components/Select/Select';
import { Formik } from 'formik';
import InputSerchMultiSelect from '../../components/InputserchAndAddToList';
import { getFormattedDate } from '../../helpers/date';
import Button from '../../components/Button';

const UserProfile = () => {
    const { genders, handleSubmitUpdate, initialValues } = useApplicantsForm()
    return (
        <Layout>
            <View style={styles.generalContainer}>
                <ScrollView>
                    <View style={styles.principalContainer}>
                        <Text style={styles.title}>Tu perfil</Text>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values, actions) => {
                                await handleSubmitUpdate(values, initialValues._id);
                                actions.setTouched({})
                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, handleReset, values, touched }) => {
                                const isBeingEdited = Object.values(touched).length;
                                return (
                                    <View style={styles.formContainer}>
                                        <InputFile
                                            label='Foto de perfil'
                                            inputStyles={styles.input}
                                            labelStyles={styles.label}
                                            styles={styles.inputContainer}
                                        />
                                        <InputText
                                            label='Nombre'
                                            inputStyles={styles.input}
                                            labelStyles={styles.label}
                                            styles={styles.inputContainer}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            value={values.name}
                                        />
                                        <InputText
                                            label='Apellido(s)'
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
                                            onChange={handleChange('gender')}
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
                                        {/* Aditional data */}
                                        <InputText
                                            styles={styles.inputContainer}
                                            inputStyles={styles.input}
                                            onChangeText={handleChange('address')}
                                            onBlur={handleBlur('address')}
                                            label='Direccion'
                                            labelStyles={styles.label}
                                            value={values.address}
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
                                            label='Sitio Web'
                                            labelStyles={styles.label}
                                            placeholder='www.example.com'
                                            onChangeText={handleChange('website')}
                                            onBlur={handleBlur('website')}
                                            value={values.website}
                                        />
                                        <InputText
                                            styles={styles.inputContainer}
                                            inputStyles={styles.input}
                                            label='Linkedin'
                                            labelStyles={styles.label}
                                            onChangeText={handleChange('linkedin')}
                                            onBlur={handleBlur('linkedin')}
                                            value={values.linkedin}
                                        />
                                        <InputText
                                            styles={styles.inputContainer}
                                            labelStyles={styles.label}
                                            inputStyles={styles.textArea}
                                            label='Descripcion'
                                            multiline={true}
                                            numberOfLines={6}
                                            onChangeText={handleChange('description')}
                                            onBlur={handleBlur('description')}
                                            value={values.description}
                                        />
                                        <TouchableHighlight
                                            onPress={() => {
                                                handleSubmit()
                                            }}
                                            style={styles.submitButton}>
                                            <Text style={styles.submitButtonText}>Actualizar</Text>
                                        </TouchableHighlight>
                                        {isBeingEdited ? (
                                            <TouchableHighlight
                                                onPress={() => { handleReset() }}
                                                style={styles.cancelButton}>
                                                <Text style={styles.submitButtonText}>Cancelar</Text>
                                            </TouchableHighlight>
                                        ) : null}
                                    </View>
                                )
                            }}
                        </Formik>
                    </View>
                    <InputSerchMultiSelect
                        handleSubmit={(values) => {
                            return values.skill
                        }}
                        title={"Habilidades y Aptitudes"}
                        fields={[
                            {
                                label: "Buscar aptitudes y habilidades",
                                type: "text",
                                name: "skill",
                                defaultValue: ""
                            }
                        ]}
                        listComponent={(value, i) => {
                            return (
                                <View key={i} style={styles.skillContainer}>
                                    <Text
                                        style={styles.skilText}
                                    >{value}</Text>
                                    <View>
                                        <Button
                                            textStyle={styles.submitButtonText}
                                            style={styles.deleteButton} title="Eliminar" />
                                    </View>
                                </View>
                            )
                        }}
                    />
                    <InputSerchMultiSelect
                        title={"Experiencia laboral"}
                        fields={[
                            {
                                label: "Buscar empresa",
                                type: "text",
                                name: "company",
                                validation: null,
                                defaultValue: ""
                            },
                            {
                                label: "Desde",
                                type: "date",
                                name: "start",
                                validation: null,
                                defaultValue: getFormattedDate()
                            },
                            {
                                label: "Hasta",
                                type: "date",
                                name: "end",
                                validation: null,
                                defaultValue: getFormattedDate()
                            },
                            {
                                label: "Actualmente trabajo aqui",
                                type: "checkbox",
                                name: "currentJob",
                                validation: null,
                                defaultValue: false
                            }
                        ]}
                    />
                    <InputSerchMultiSelect
                        title={"Estudios"}
                        fields={[
                            {
                                label: "Buscar Institucion",
                                type: "text",
                                name: "college",
                                validation: null,
                                defaultValue: ""
                            },
                            {
                                type: "date",
                                name: "start",
                                label: 'Desde',
                                validation: null,
                                defaultValue: getFormattedDate()
                            },
                            {
                                type: "date",
                                name: "end",
                                label: 'Hasta',
                                validation: null,
                                defaultValue: getFormattedDate()
                            },
                            {
                                label: "Actualmente estudio aqui",
                                type: "checkbox",
                                name: "currentCollege",
                                validation: null,
                                defaultValue: false
                            }
                        ]}
                    />
                </ScrollView>
            </View>
        </Layout>
    );
}

export default UserProfile;