import { View, Text, ScrollView } from 'react-native'
import InputText from '../../components/InputText'
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import styles from './styles';
import InputFile from '../../components/InputFile';

const BussinesProfile = () => {
    const sectores = [
        "Agricultura",
        "Alimentos y bebidas",
        "Automotriz",
        "Bienes raíces",
        "Comercio minorista",
        "Construcción",
        "Consultoría",
        "Deportes",
        "Educación",
        "Energía",
        "Entretenimiento",
        "Farmacéutica",
        "Finanzas y banca",
        "Gobierno y administración pública",
        "Hotelería y turismo",
        "Industria química",
        "Industria textil y confección",
        "Ingeniería",
        "Investigación y desarrollo",
        "Logística y transporte",
        "Manufactura",
        "Medios de comunicación",
        "Minería y extracción de recursos",
        "Moda y belleza",
        "Organizaciones sin fines de lucro",
        "Publicidad y marketing",
        "Salud y medicina",
        "Seguros",
        "Servicios de TI",
        "Servicios financieros",
        "Servicios legales",
        "Servicios profesionales",
        "Telecomunicaciones"
    ]
    return (
        <Layout>
            <View style={styles.generalContainer}>
                <ScrollView>
                    <View style={styles.principalContainer}>
                        <View style={styles.formContainer}>
                            <Text style={styles.title}>Tu perfil</Text>
                            <InputFile />
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Nombre de empresa'
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
                            <View style={styles.doubleContainer}>
                                <Text style={styles.doubleLabel}>Numero de empleado</Text>
                                <View style={styles.doubleInputsContainer}>
                                    <InputText
                                        styles={styles.doubleContinerInput}
                                        inputStyles={styles.input}
                                        placeholder='Max'
                                    />
                                    <InputText
                                        styles={styles.doubleContinerInput}
                                        inputStyles={styles.input}
                                        placeholder='Min'
                                    />
                                </View>
                            </View>
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Facebook'
                                labelStyles={styles.label}
                            />
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Twitter'
                                labelStyles={styles.label}
                            />
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Instagram'
                                labelStyles={styles.label}
                            />
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Linkedin'
                                labelStyles={styles.label}
                            />
                            <Select
                                label='Sector'
                                labelStyles={styles.label}
                                selectStyles={styles.dropDown}
                                items={sectores}
                            />
                            <InputText
                                styles={styles.inputContainer}
                                labelStyles={styles.label}
                                inputStyles={styles.textArea}
                                label='Breve descripdcion'
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

export default BussinesProfile;