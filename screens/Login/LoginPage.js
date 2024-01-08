import { View, Text, Image, TouchableHighlight } from 'react-native';
import InputText from '../../components/InputText'
import styles from './styles';
import Button from '../../components/Button'
import Layout from '../../components/Layout/Layout';
import useLogin from '../../hooks/sessions/useLogin';
import { Formik } from 'formik';
import { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LoginSchema } from '../../tools/schemaValidation';
import ErrorForm from '../../components/ErrorFrom/errorForm';

const LoginPage = () => {
    const { handleLogin, error } = useLogin();

    const navigation = useNavigation();
    const route = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation, route]);

    return (
        <View style={{ flex: 1 }} >
            <View style={styles.generalContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../src/img/logo.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
                <View style={styles.principalContainer}>
                    <Text style={styles.typeRegisterTitle}>Login</Text>
                    <Formik
                        initialValues={{
                            password: '',
                            email: ''
                        }}
                        onSubmit={values => {
                            handleLogin(values)
                        }}
                        validationSchema={LoginSchema}
                    >
                        {({ handleSubmit, handleChange, values, errors }) => (
                            <View style={styles.formContainer}>
                                <InputText
                                    label='Correo'
                                    inputStyles={styles.input}
                                    labelStyles={styles.label}
                                    styles={styles.inputContainer}
                                    onChangeText={handleChange('email')}
                                    error={errors.email}
                                />
                                <InputText
                                    label='Password'
                                    inputStyles={styles.input}
                                    labelStyles={styles.label}
                                    styles={styles.inputContainer}
                                    password
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    error={errors.password}
                                />
                                <ErrorForm error={error} />
                                <Button
                                    underlayColor="rgba(255,255,255,0)"
                                    styles={styles.submitButton}
                                    textStyle={styles.submitButtonText}
                                    title='Iniciar sesión'
                                    onPress={handleSubmit}
                                />
                                <View style={styles.askAccontContinar}>
                                    <Text style={styles.askAccontText}>No tienes cuenta?</Text>
                                    <Button
                                        textStyle={styles.createAccountButtonText}
                                        title='Crear cuenta'
                                        onPress={() => navigation.navigate('CreateAccount')}
                                        underlayColor="rgba(255,255,255,0)"
                                    />
                                </View>
                                <View style={styles.askAccontContinar}>
                                    <Text style={styles.askAccontText}>Olvidaste tu contraseña?</Text>
                                    <Button
                                        textStyle={styles.createAccountButtonText}
                                        title='Cambiar contraseña'
                                        onPress={() => navigation.navigate('ForgotPassword')}
                                        underlayColor="rgba(255,255,255,0)"
                                    />
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </View>
    );
}

export default LoginPage;