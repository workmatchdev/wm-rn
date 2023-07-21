import { View, Text, ScrollView } from 'react-native'
import InputText from '../../components/InputText'
import Layout from '../../components/Layout/Layout';
import styles from './styles';
import Button from '../../components/Button/Button';

const UserProfile = () => {
    return (
        <Layout>
            <View style={styles.generalContainer}>
                <ScrollView>
                    <View style={styles.principalContainer}>
                        <View style={styles.formContainer}>
                            <Text style={styles.title}>Tu perfil</Text>
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Nombre'
                                labelStyles={styles.label}
                            />
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Direccion'
                                labelStyles={styles.label}
                            />
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Telefono'
                                labelStyles={styles.label}
                            />
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Email'
                                labelStyles={styles.label}
                                placeholder='jhondoe.example.com'
                            />
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Sitio Web'
                                labelStyles={styles.label}
                                placeholder='www.example.com'
                            />
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Linkedin'
                                labelStyles={styles.label}
                            />
                            <InputText
                                styles={styles.inputContainer}
                                labelStyles={styles.label}
                                inputStyles={styles.textArea}
                                label='Descripcion'
                                multiline={true}
                                numberOfLines={6}
                            />
                            <Button
                                textStyle={styles.submitButtonText}
                                style={styles.submitButton}
                                title='Guardar'
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Layout>
    );
}

export default UserProfile;