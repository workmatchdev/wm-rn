import React from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    Image
} from "react-native";
import styles from "./styles";
import useCreateAccount from "./hooks/useCreateAccount";
import FormAccount from "./FormAccount";
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';

const CreateAccount = ({ navigation }) => {
    const talonProps = useCreateAccount();
    const {
        handleShowForm,
        visibleForm,
        seIisBussines,
        isBussines
    } = talonProps;
    if (visibleForm) return <FormAccount navigation={navigation} handleShowForm={handleShowForm} isBussines={isBussines} />
    return (
        <Layout>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../src/img/logo.png')}
                    style={{ width: 100, height: 100 }}
                />
            </View>
            <View style={styles.generalContainer}>
                <View style={styles.modalOptions}>
                    <Text style={styles.typeRegisterTitle}>Que buscas?</Text>
                    <View style={styles.typeRegisterContainer}>
                        <TouchableHighlight
                            onPress={() => {
                                handleShowForm();
                                seIisBussines(true)
                            }}
                            style={styles.buttonRegisterBussines}>
                            <View>
                                <Text style={styles.buttonRegisterBussinesText}>Quiero encontrar talentos</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                handleShowForm();
                                seIisBussines(false)
                            }}
                            style={styles.buttonRegisterUser}>
                            <View>
                                <Text style={styles.buttonRegisterUserText}>Busco trabajo</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={styles.askAccontContinar}>
                            <Text style={styles.askAccontText}>No tienes cuenta?</Text>
                            <Button
                                textStyle={styles.createAccountButtonText}
                                title='Iniciar Sesion'
                                onPress={() => {
                                    navigation.navigate('Login')
                                }}
                                underlayColor="rgba(255,255,255,0)"
                            />
                        </View>
                    </View>
                    <View style={styles.copyContainer}>
                        <Text style={styles.textWhite}>Terminos y condiciones</Text>
                        <Text style={styles.textWhite}>Todos los derechos reservados &copy;</Text>
                    </View>
                </View>
            </View>
        </Layout>

    );
}

export default CreateAccount;