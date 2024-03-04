import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './components/PaymentScreen';
import CardPayment from './components/CardPayment';

const Stripe = (props) => {
    return (
        <StripeProvider
            publishableKey={""}
            // merchantIdentifier="merchant.identifier" // required for Apple Pay
        >
            <CardPayment {...props} />
        </StripeProvider>
    );
}

export default Stripe;