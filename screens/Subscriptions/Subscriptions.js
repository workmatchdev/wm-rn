import { View, Text, ScrollView, Image } from 'react-native';
import InputText from '../../components/InputText'
import Layout from '../../components/Layout'
import Button from '../../components/Button/Button';
import styles from './styles';
import Stripe from '../../components/Stripe';
import Carrousel from '../../components/Carrousel';
import useSuscriptions from './hooks/useSuscriptions';
import Modal from '../../components/Modal';

const benefitsName = {
    "emails": "Notificaciones por email",
    "chat": "Chat disponible",
    "support": "Soporte prioritario",
    "limitMatches": "Podras ver el numero de match en ofertas laborales",
    "statusMatch": "Estado de match",
    "profileReviewStatus": "Chequear si tu perfil fue revisado",
    "email": "Notificaciones por email",
    "limitMatchesOnJobs": "Numero de match en ofertas laborales",
    "matchsStatus": "Estado de match",
    "profileReviewtStatus": "Ver el estatus de tus ofertas laborarles"
}

const Subscriptions = () => {
    const {
        memberships,
        calculateTotal,
        handleSelectPlan,
        selectedPlan,
        hasActivePlan,
        handleCancelSelectPlan
    } = useSuscriptions()
    const cardPlan = ({ item }) => {
        const { name, benefits, disaccount, price } = item;
        const total = calculateTotal(price, disaccount);
        return (
            <View style={styles.plan}>
                <View>
                    <Text style={styles.planName}>{name}</Text>
                    <View>
                        {benefits.map(benefit => {
                            return <Text style={styles.featureAvailable}>- {benefitsName[benefit]}</Text>
                        })}
                    </View>
                </View>
                <Button
                    textStyle={styles.submitButtonText}
                    style={styles.submitButton}
                    title={`$ ${total} MXN`}
                    onPress={() => { handleSelectPlan({ ...item, total }) }}
                />
            </View>
        );
    };

    return (
        <Layout>
            <View style={styles.generalContainer}>
                <ScrollView style={styles.scrollViewConatiner}>
                    {!hasActivePlan && (
                        <View style={styles.principalContainer}>
                            <View style={styles.avaliblePlans}>
                                <Text style={styles.title}>Planes disponibles </Text>
                                <View>
                                    <Carrousel carouselItems={memberships} renderComponent={cardPlan} />
                                </View>
                                <View style={styles.logoContainer}>
                                    <Image
                                        source={require('../../src/img/stripe.png')}
                                        style={{ width: '50%', height: 50 }}
                                    />
                                </View>
                            </View>
                        </View>
                    )}

                    {hasActivePlan && <View style={styles.principalContainer}>
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
                    </View>}

                    {selectedPlan && (
                        <Modal
                            isOpen={!!selectedPlan}
                            style={styles.modalContainer}
                        >
                            <View style={styles.principalContainer}>
                                <View style={styles.paymentContainer}>
                                    <View>
                                        <Text style={styles.title}>Pagar subscripción</Text>
                                        <View
                                            style={{
                                                display:'flex',
                                                flexDirection: 'row',
                                                alignContent: 'center',
                                                paddingHorizontal: 10
                                            }}
                                        >
                                            <Text style={styles.selectedPlanName}>{selectedPlan.name} </Text>
                                            <Text style={styles.selectedPlanName}>${selectedPlan.total} MXN</Text>
                                        </View>
                                        <View>
                                            {selectedPlan.benefits.map(benefit => {
                                                return <Text style={styles.featureAvailable}>- {benefitsName[benefit]}</Text>
                                            })}
                                        </View>
                                    </View>
                                    <View>
                                        <Stripe />
                                        <Button
                                            onPress={handleCancelSelectPlan}
                                            textStyle={styles.submitButtonText}
                                            style={styles.cancelButton}
                                            title='Cancelar'
                                        />
                                    </View>
                                </View>
                            </View>
                        </Modal>

                    )}
                </ScrollView>
            </View>
        </Layout>
    );
}

export default Subscriptions;