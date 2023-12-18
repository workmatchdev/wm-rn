import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './components/PaymentScreen';
import CardPayment from './components/CardPayment';

const Stripe = (props) => {
    return (
        <StripeProvider
            publishableKey={"pk_test_51O9cy9KDOWfXWFnekyDt6252uEFSdvyKRcIF7vZjct74innisc0saOwRMHyeWuNVUBzF90QgUszTckh8MwGm68DW00wXbVioGS"}
            // merchantIdentifier="merchant.identifier" // required for Apple Pay
        >
            <CardPayment {...props} />
        </StripeProvider>
    );
}

export default Stripe;