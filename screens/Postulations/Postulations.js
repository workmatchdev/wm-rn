import Layout from "../../components/Layout/Layout";
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import Image from "../../components/Image";
import Button from "../../components/Button";
import Select from '../../components/Select';
import { useNavigation } from "@react-navigation/native";

const Postulations = () => {

    const sectores = [
        '-- Selecciona una vacante',
        'Desarrlloador Web'
    ]

    const navigation = useNavigation();

    return (
        <Layout>
            <ScrollView>
                <View style={styles.dropDownContainer} >
                    <Select
                        label='Vacante'
                        labelStyles={styles.label}
                        selectStyles={styles.dropDown}
                        items={sectores}
                    />
                </View>
            </ScrollView>
        </Layout>
    );
}

export default Postulations;