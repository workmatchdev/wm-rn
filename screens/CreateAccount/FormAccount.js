import InputText from "../../components/InputText/InputText";
import {
    Text,
    View,
    TouchableHighlight,
    ScrollView
} from "react-native";
import styles from "./styles";
import Layout from '../../components/Layout/Layout';
import Select from '../../components/Select/Select';

const FormAccount = (props) => {
    const {
        handleShowForm,
        isBussines,
        navigation
    } = props;
    const genders = ["Hombre", "Mujer", "Otro"]
    return (
        <Layout>
            <ScrollView >
                <View style={styles.principalContainer}>
                    <View style={styles.formContainer}>
                        <View style={styles.principalTitle}>
                            <Text style={styles.pricipalTitleText}>Crear Cuenta</Text>
                        </View>
                        <InputText
                            label='Nombre'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                        />
                        <InputText
                            label='Apellido Paterno'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                        />
                        <InputText
                            label='Apellido Materno'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                        />
                        <Select
                            label='Genero'
                            labelStyles={styles.label}
                            selectStyles={styles.gender}
                            items={genders}
                        />
                        <InputText
                            label='Email'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                        />
                        {isBussines ? <InputText
                            label='Nombre de la empresa'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                            placeholder="Nombre de la empresa"
                        /> : null}
                        <InputText
                            label='Contraseña'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                            password
                        />
                        <InputText
                            label='Confirmar Contraseña'
                            inputStyles={styles.input}
                            labelStyles={styles.label}
                            styles={styles.inputContainer}
                            password
                        />
                        <TouchableHighlight
                            onPress={() => navigation.navigate('Home', { name: 'user' })}
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Registrarme</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => handleShowForm()} style={styles.cancelButton}>
                            <Text style={styles.submitButtonText}>Cancelar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        </Layout>
    );
}

export default FormAccount;