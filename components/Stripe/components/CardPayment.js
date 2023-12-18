import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { View, Text, ActivityIndicator } from 'react-native';
import Button from '../../Button/Button';
import styles from '../styles';
import axios from 'axios';
import { useState } from 'react';
import useSession from '../../../hooks/sessions/useSession';
import colors from '../../../src/assets/colors';

export default CardPayment = ({ onCancel, onSuccess, data }) => {

    const [getCardDetails, setGetCardDetails] = useState({});
    const { confirmPayment, loading } = useConfirmPayment();
    const [errors, setErrors] = useState(null)
    const [succesMessage, setSuccesMessage] = useState(null)
    const { user, setMembership } = useSession();

    const fetchPaymentIntentClientSecret = async () => {
        try {
            const response = await axios.post('http://192.168.134.1:4000/api/activeMemberships/payment-intent-stripe', {
                currency: 'mxn',
                amount: 1000,
                membershipId: data._id,
                ...getCardDetails,
            });
            setErrors(null)
            return response.data.paymentIntent;
        } catch (error) {
            console.log(error);
            setErrors('Ha ocurrido un error al intentar realizar el pago')
        }
    };

    const handlePayPress = async () => {
        if (!getCardDetails.complete) {
            setErrors('Hay un error en el formilario \n revisa tu información')
            return null
        }
        const billingDetails = {
            email: user.email,
        };
        const clientSecret = await fetchPaymentIntentClientSecret();
        if (clientSecret) {
            const { paymentIntent, error } = await confirmPayment(clientSecret, {
                paymentMethodType: 'Card',
                paymentMethodData: {
                    billingDetails
                },
            });
            if (error) {
                setErrors('Ha ocurrido un error al intentar realizar el pago \n Porfavor intentelo mas tarde.')
            } else if (paymentIntent) {
                const generateNewMemberShip = await axios.post('http://192.168.134.1:4000/api/activeMemberships/activate', {
                    userId: user._id,
                    membershipId: data._id, 
                })
                setMembership({
                    activeMembership: generateNewMemberShip.data.savedActiveMembership,
                    membership: generateNewMemberShip.data.membership
                  })
                setSuccesMessage('Se ha realizando el pago correctamente')
            }
        }
    };

    if (loading) return (
        <View>
            <ActivityIndicator size="large" color={colors.principalColor} />
        </View>
    )

    if (succesMessage) {
        return (
            <View>
                <Text style={styles.succesMessage}>{succesMessage}</Text>
                <Button
                    onPress={onCancel}
                    textStyle={styles.submitButtonText}
                    style={styles.successButton}
                    title='Regresar'
                />
            </View>
        )
    }

    return (
        <View>
            <CardField
                postalCodeEnabled={false}
                placeholders={{
                    number: '4242 4242 4242 4242',
                }}
                cardStyle={{
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000',
                }}
                style={{
                    width: '100%',
                    height: 50,
                    marginVertical: 30,
                }}
                onCardChange={(cardDetails) => {
                    setGetCardDetails(cardDetails)
                }}
            />
            {errors && <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{errors}</Text>
            </View>}
            <Button
                onPress={handlePayPress}
                textStyle={styles.submitButtonText}
                style={styles.submitButton}
                title='Pagar'
            />
            <Button
                onPress={onCancel}
                textStyle={styles.submitButtonText}
                style={styles.cancelButton}
                title='Cancelar'
            />
        </View>
    );
}

