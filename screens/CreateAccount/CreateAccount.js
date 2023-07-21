import React from 'react'
import {
    Text,
    View,
    TouchableHighlight,
} from "react-native";
import styles from "./styles";
import useCreateAccount from "./hooks/useCreateAccount";
import FormAccount from "./FormAccount";
import Layout from '../../components/Layout/Layout';

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
                    </View>
                    <View style={styles.copyContainer}>
                        <Text>Terminos y condiciones</Text>
                        <Text>Todos los derechos reservados &copy;</Text>
                    </View>
                </View>
            </View>
        </Layout>

    );
}

export default CreateAccount;