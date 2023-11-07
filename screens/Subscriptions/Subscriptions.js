import { View, Text, ScrollView } from 'react-native';
import InputText from '../../components/InputText'
import Layout from '../../components/Layout'
import Button from '../../components/Button/Button';
import styles from './styles';
import Stripe from '../../components/Stripe';

const Subscriptions = () => {
    return (
        <Layout>
            <View style={styles.generalContainer}>
                <ScrollView style={styles.scrollViewConatiner}>
                    <View style={styles.principalContainer}>
                        <View style={styles.formContainer}>
                            <Text style={styles.title}>Planes disponibles </Text>
                            <View style={styles.avaliblePlans}>
                                <View style={styles.plan}>
                                    <View>
                                        <Text style={styles.planName}>Plan Anula</Text>
                                        <Text style={styles.description}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est nulla, porttitor sit amet tempor non, scelerisque in diam. In sit amet posuere ante.
                                        </Text>
                                        <View>
                                            <View>
                                                <Text style={styles.featureAvailable}>Caracteristica 1</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 2</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 3</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 4</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 5</Text>
                                            </View>
                                        </View>
                                        <Button
                                            textStyle={styles.submitButtonText}
                                            style={styles.submitButton}
                                            title='$ 315.00 MNX'
                                        />
                                    </View>
                                </View>

                                <View style={styles.plan}>
                                    <View>
                                        <Text style={styles.planName}>Plan Semestral</Text>
                                        <Text style={styles.description}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est nulla, porttitor sit amet tempor non, scelerisque in diam. In sit amet posuere ante.
                                        </Text>
                                        <View>
                                            <View>
                                                <Text style={styles.featureAvailable}>Caracteristica 1</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 2</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 3</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 4</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 5</Text>
                                            </View>
                                        </View>
                                        <Button
                                            textStyle={styles.submitButtonText}
                                            style={styles.submitButton}
                                            title='$ 315.00 MNX'
                                        />
                                    </View>
                                </View>

                                <View style={styles.plan}>
                                    <View>
                                        <Text style={styles.planName}>Plan Mensual</Text>
                                        <Text style={styles.description}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est nulla, porttitor sit amet tempor non, scelerisque in diam. In sit amet posuere ante.
                                        </Text>
                                        <View>
                                            <View>
                                                <Text style={styles.featureAvailable}>Caracteristica 1</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 2</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 3</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 4</Text>
                                                <Text style={styles.featureAvailable}>Caracteristica 5</Text>
                                            </View>
                                        </View>
                                        <Button
                                            textStyle={styles.submitButtonText}
                                            style={styles.submitButton}
                                            title='$ 315.00 MNX'
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.principalContainer}>
                        <View style={styles.formContainer}>
                            <Text style={styles.title}>Subscripción activa </Text>
                            <View>
                                <View style={styles.activeSubscriptionContianerRow}>
                                    <Text style={styles.labelSubscription}>Plan premium:</Text>
                                    <Text style={styles.infoSubscription}>$315 MXN</Text>
                                </View>
                                <View style={styles.activeSubscriptionContianerRow}>
                                    <Text style={styles.labelSubscription}>Fecha de vencimieto:</Text>
                                    <Text style={styles.infoSubscription}>15/08/2023</Text>
                                </View>
                            </View>
                            <View>
                                <Button
                                    textStyle={styles.submitButtonText}
                                    style={styles.submitButton}
                                    title='Renovar'
                                />
                                <Button
                                    textStyle={styles.submitButtonText}
                                    style={styles.submitButton}
                                    title='Cambiar plan'
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.principalContainer}>
                        <View style={styles.formContainer}>
                            <Text style={styles.title}>Pagar subscripción</Text>
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Numero de tarjeta'
                                labelStyles={styles.label}
                            />
                            <View style={styles.doubleContainer}>
                                {/* <Text style={styles.doubleLabel}>Numero de empleado</Text> */}
                                <View style={styles.doubleInputsContainer}>
                                    <InputText
                                        label='Fecha de vencimiento'
                                        styles={styles.doubleContinerInput}
                                        inputStyles={styles.input}
                                    />
                                    <InputText
                                        label='CVV'
                                        styles={styles.doubleContinerInput}
                                        inputStyles={styles.input}
                                    />
                                </View>
                            </View>
                            <InputText
                                styles={styles.inputContainer}
                                inputStyles={styles.input}
                                label='Facebook'
                                labelStyles={styles.label}
                            />
                            <Button
                                textStyle={styles.submitButtonText}
                                style={styles.submitButton}
                                title='Guardar'
                            />
                        </View>
                    </View>
                    <Stripe />
                </ScrollView>
            </View>
        </Layout>
    );
}

export default Subscriptions;