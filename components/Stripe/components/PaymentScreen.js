import { usePlatformPay, PlatformPayButton, PlatformPay } from '@stripe/stripe-react-native';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function PaymentScreen() {
  const {
    isPlatformPaySupported,
    confirmPlatformPayPayment,
  } = usePlatformPay();

  const fetchPaymentIntentClientSecret = async () => {
    // Fetch payment intent created on the server, see above
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
      }),
    });
    const { clientSecret } = await response.json();

    return clientSecret;
  };

  const pay = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();

    const { error } = await confirmPlatformPayPayment(
      clientSecret,
      {
        googlePay: {
          testEnv: true,
          merchantName: 'My merchant name',
          merchantCountryCode: 'US',
          currencyCode: 'USD',
          billingAddressConfig: {
            format: PlatformPay.BillingAddressFormat.Full,
            isPhoneNumberRequired: true,
            isRequired: true,
          },
        },
      }
    );

    if (error) {
      alert(error.code, error.message);
      // Update UI to prompt user to retry payment (and possibly another payment method)
      return;
    }
    alert('Success', 'The payment was confirmed successfully.');
  };
  useEffect(() => {
    (async function () {
      if (!(await isPlatformPaySupported({ googlePay: { testEnv: true } }))) {
        alert('Google Pay is not supported.');
        return;
      }
    })();
  }, []);

  return (
    <View>
      <View >
        <PlatformPayButton
          type={PlatformPay.ButtonType.Pay}
          onPress={pay}
          style={{
            width: '100%',
            height: 50,
          }}
        />
      </View>
    </View>
  );
}