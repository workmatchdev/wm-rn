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
                <View style={styles.cardList}>
                    <View style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'}
                                imageContainerStyles={styles.logoContainer}
                                imageStyles={styles.logo}
                            />
                        </View>
                        <View style={styles.dataContainer}>
                            <Text style={styles.textData}>Jose Alberto Ortega Almazan</Text>
                            <Text style={styles.textData}>Web Developer</Text>
                            <Text style={styles.textData}>Fecha de postulacion: 17/08/2000</Text>
                            <Text style={styles.textData}>Vacante: Vacante numero 1</Text>
                            <Button
                                onPress={() => {
                                    navigation.navigate('Candidate')
                                }}
                                title='Ver candidato'
                                style={styles.button}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>

                    <View style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'}
                                imageContainerStyles={styles.logoContainer}
                                imageStyles={styles.logo}
                            />
                        </View>
                        <View style={styles.dataContainer}>
                            <Text>Jose Alberto Ortega Almazan</Text>
                            <Text>Web Developer</Text>
                            <Text>Fecha de postulacion: 17/08/2000</Text>
                            <Button
                                title='Ver candidato'
                                style={styles.button}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>

                    <View style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'}
                                imageContainerStyles={styles.logoContainer}
                                imageStyles={styles.logo}
                            />
                        </View>
                        <View style={styles.dataContainer}>
                            <Text>Jose Alberto Ortega Almazan</Text>
                            <Text>Web Developer</Text>
                            <Text>Fecha de postulacion: 17/08/2000</Text>
                            <Button
                                title='Ver candidato'
                                style={styles.button}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>

                    <View style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'}
                                imageContainerStyles={styles.logoContainer}
                                imageStyles={styles.logo}
                            />
                        </View>
                        <View style={styles.dataContainer}>
                            <Text>Jose Alberto Ortega Almazan</Text>
                            <Text>Web Developer</Text>
                            <Text>Fecha de postulacion: 17/08/2000</Text>
                            <Button
                                title='Ver candidato'
                                style={styles.button}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>

                    <View style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'}
                                imageContainerStyles={styles.logoContainer}
                                imageStyles={styles.logo}
                            />
                        </View>
                        <View style={styles.dataContainer}>
                            <Text>Jose Alberto Ortega Almazan</Text>
                            <Text>Web Developer</Text>
                            <Text>Fecha de postulacion: 17/08/2000</Text>
                            <Button
                                title='Ver candidato'
                                style={styles.button}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>

                    <View style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'}
                                imageContainerStyles={styles.logoContainer}
                                imageStyles={styles.logo}
                            />
                        </View>
                        <View style={styles.dataContainer}>
                            <Text>Jose Alberto Ortega Almazan</Text>
                            <Text>Web Developer</Text>
                            <Text>Fecha de postulacion: 17/08/2000</Text>
                            <Button
                                title='Ver candidato'
                                style={styles.button}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'}
                                imageContainerStyles={styles.logoContainer}
                                imageStyles={styles.logo}
                            />
                        </View>
                        <View style={styles.dataContainer}>
                            <Text>Jose Alberto Ortega Almazan</Text>
                            <Text>Web Developer</Text>
                            <Text>Fecha de postulacion: 17/08/2000</Text>
                            <Button
                                title='Ver candidato'
                                style={styles.button}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Layout>
    );
}

export default Postulations;