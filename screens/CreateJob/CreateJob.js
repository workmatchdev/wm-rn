import { View, Text, ScrollView } from "react-native";
import InputText from "../../components/InputText/InputText";
import styles from "./styles";
import Button from '../../components/Button'
import InputList from "../../components/InputList";
import Layout from "../../components/Layout/Layout";

const CreateJob = () => {
    return (
        <Layout>
            <ScrollView>
                <View style={styles.generalContainer}>
                    <View style={styles.formContainer}>
                        <View style={styles.principalTitle}>
                            <Text style={styles.pricipalTitleText}>Crea un nuevo puesto</Text>
                        </View>
                        <InputText
                            styles={styles.inputContainer}
                            labelStyles={styles.label}
                            inputStyles={styles.input}
                            label='Titulo'
                        />
                        <InputText
                            styles={styles.inputContainer}
                            labelStyles={styles.label}
                            inputStyles={styles.input}
                            label='Cargo'
                        />
                        <InputText
                            styles={styles.inputContainer}
                            labelStyles={styles.label}
                            inputStyles={styles.input}
                            label='Plazo'
                        />
                        <InputText
                            styles={styles.inputContainer}
                            labelStyles={styles.label}
                            inputStyles={styles.input}
                            label='Limite de matches'
                        />
                        <View style={styles.salaryContainer}>
                            <Text style={styles.salaryLabel}>Rango de salario</Text>
                            <View style={styles.salaryInputsContainer}>
                                <InputText
                                    styles={styles.salaryContinerInput}
                                    inputStyles={styles.input}
                                    placeholder='Max'
                                />
                                <InputText
                                    styles={styles.salaryContinerInput}
                                    inputStyles={styles.input}
                                    placeholder='Min'
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
                        />
                        <InputList />
                        <Button
                            style={styles.saveButton}
                            textStyle={styles.saveButtonText}
                            title='Guardar'
                        />
                    </View>
                </View>
            </ScrollView>
        </Layout>
    );
}

export default CreateJob;