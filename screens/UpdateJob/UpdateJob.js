import { View, Text, ScrollView } from "react-native";
import InputText from "../../components/InputText/InputText";
import styles from "./styles";
import Button from '../../components/Button'
import InputList from "../../components/InputList";
import Layout from "../../components/Layout/Layout";
import { Formik } from 'formik';
import useCreateJobs from '../CreateJob/hooks/useCreateJobs';

const CreateJob = ({ route }) => {

    const { jobId } = route.params;

    const { handleSubmitUpdate, initialValues, getSelectedKeyWords, selectedKeyWordsSaved } = useCreateJobs({
        jobId
    });

    return (
        <Layout>
            <ScrollView>
                <View style={styles.generalContainer}>
                    <View style={styles.formContainer}>
                        <View style={styles.principalTitle}>
                            <Text style={styles.pricipalTitleText}>Crea un nuevo puesto</Text>
                        </View>
                        {initialValues ? <Formik
                            initialValues={initialValues}
                            onSubmit={values => {
                                handleSubmitUpdate(values)
                            }}
                        >
                            {({ handleSubmit, handleChange, values, handleBlur }) => (
                                <View>
                                    <InputText
                                        styles={styles.inputContainer}
                                        labelStyles={styles.label}
                                        inputStyles={styles.input}
                                        label='Titulo'
                                        value={values.title}
                                        onChangeText={handleChange('title')}
                                        onBlur={handleBlur('title')}
                                    />
                                    <InputText
                                        styles={styles.inputContainer}
                                        labelStyles={styles.label}
                                        inputStyles={styles.input}
                                        label='Cargo'
                                        value={values.position}
                                        onChangeText={handleChange('position')}
                                        onBlur={handleBlur('position')}
                                    />
                                    <InputText
                                        styles={styles.inputContainer}
                                        labelStyles={styles.label}
                                        inputStyles={styles.input}
                                        label='Plazo'
                                        value={values.term}
                                        onChangeText={handleChange('term')}
                                        onBlur={handleBlur('term')}
                                    />
                                    <InputText
                                        styles={styles.inputContainer}
                                        labelStyles={styles.label}
                                        inputStyles={styles.input}
                                        label='Limite de matches'
                                        value={values.limitMatches}
                                        onChangeText={handleChange('limitMatches')}
                                        onBlur={handleBlur('limitMatches')}
                                    />
                                    <View style={styles.salaryContainer}>
                                        <Text style={styles.salaryLabel}>Rango de salario</Text>
                                        <View style={styles.salaryInputsContainer}>
                                            <InputText
                                                styles={styles.salaryContinerInput}
                                                inputStyles={styles.input}
                                                placeholder='Max'
                                                value={values.maximumSalary}
                                                onChangeText={handleChange('maximumSalary')}
                                                onBlur={handleBlur('maximumSalary')}
                                            />
                                            <InputText
                                                styles={styles.salaryContinerInput}
                                                inputStyles={styles.input}
                                                placeholder='Min'
                                                value={values.minimumSalary}
                                                onChangeText={handleChange('minimumSalary')}
                                                onBlur={handleBlur('minimumSalary')}
                                            />
                                        </View>
                                    </View>
                                    <InputText
                                        styles={styles.inputContainer}
                                        labelStyles={styles.label}
                                        inputStyles={styles.textArea}
                                        label='Descripcion'
                                        multiline={true}
                                        numberOfLines={6}
                                        value={values.description}
                                        onChangeText={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                    />
                                    <Text style={styles.label}>Keywords</Text>
                                    <InputList
                                        selectedItems={selectedKeyWordsSaved}
                                        onChange={getSelectedKeyWords}
                                        extraKeywords={initialValues.extraKeywords || []}
                                        keywords={initialValues.keywords || []}
                                    />
                                    <Button
                                        style={styles.saveButton}
                                        textStyle={styles.saveButtonText}
                                        title='Guardar'
                                        onPress={handleSubmit}
                                    />
                                </View>
                            )}
                        </Formik> : <Text>Cargando...</Text>}
                    </View>
                </View>
            </ScrollView>
        </Layout>
    );
}

export default CreateJob;