import { TouchableHighlight, View, Text, ScrollView } from "react-native";
import Layout from '../../components/Layout'
import ValidateEmail from "./components/validateEmail";
import FormChangePassword from "./components/formChangePassword";
import ChangePassword from "./components/changePassword";
import Success from "./components/success";
import useForgotPassword from "./hooks/useForgotPassword";
import { LeftArrow } from "../../src/assets/icons";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {

    const { step, ...rest } = useForgotPassword();

    const navigation = useNavigation();

    let componentStep = <ValidateEmail {...rest} />

    if (step === 1) {
        componentStep = <FormChangePassword {...rest} />
    }
    if (step === 2) {
        componentStep = <ChangePassword {...rest} />
    }
    if (step === 3) {
        componentStep = <Success />
    }

    return (
        <View>
            <ScrollView>
                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        backgroundColor: '#fff'
                    }}
                >
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Login')}
                    >
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <LeftArrow width='30' height='30' fill='#000' stroke="#000" strokeWidth={0.5} />
                            <Text style={{ marginLeft: 10 }}>Regresar</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {componentStep}
            </ScrollView>
        </View>
    );
}

export default ForgotPassword;