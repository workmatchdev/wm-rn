import { useRef } from "react";
import { View, Text, Image, ScrollView, Animated } from "react-native";
import Layout from '../../components/Layout';
import styles from "./styles";
import RoundedButton from "../../components/RoundedButton";
import { XMarck, CheckMark, Message } from "../../src/assets/icons";
import useMatchs from "./hooks/useMatchs";
import colors from "../../src/assets/colors";

const Matchs = () => {

    const generalContainer = useRef(new Animated.ValueXY()).current;
    const {
        handleLeftSwipe,
        handleRightSwipe,
        panResponder,
        rotate,
        opacity
    } = useMatchs({ generalContainer })

    return (
        <Layout>
            <Animated.View
                {...panResponder.panHandlers}
                style={[
                    generalContainer.getLayout(),
                    styles.principalContainer,
                    { transform: ([{ rotate }]) },
                    { opacity }
                ]}
            >
                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Titulo del empleo</Text>
                        <Text style={styles.cargo}>Cargo</Text>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc est nulla, porttitor sit amet tempor non, scelerisque in diam.
                            In sit amet posuere ante. Nullam gravida elementum porta.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                            turpis egestas.
                        </Text>
                        <View>
                            <View style={styles.contianerRow}>
                                <Text style={styles.labelContainer}>Salario:</Text>
                                <Text style={styles.infoContainer}>30, 000 - 50,000</Text>
                            </View>
                            <View style={styles.contianerRow}>
                                <Text style={styles.labelContainer}>Plazo:</Text>
                                <Text style={styles.infoContainer}>Indefinido</Text>
                            </View>
                        </View>
                        <View style={styles.bussinesContainer}>
                            <View style={styles.logoContainer}>
                                <Image
                                    style={styles.logo}
                                    source={{
                                        uri: 'https://www.novoplast.gt/wp-content/uploads/2019/08/TU-LOGO-AQUI-BLANCO-Y-GRIS.png',
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={styles.bussinesName}>Nombre de la empresa</Text>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <RoundedButton
                                onPress={() => {
                                    handleLeftSwipe()
                                }}
                                color={colors.principalRed}
                                icon={<XMarck fill="#fff" stroke="#fff" width='40' height='40' />}
                            />
                            <RoundedButton
                                color={colors.secondarypalColor}
                                icon={<Message fill="#fff" stroke="#fff" width='40' height='40' />}
                            />
                            <RoundedButton
                                onPress={() => {
                                    handleRightSwipe()
                                }}
                                color={colors.principalGreen}
                                icon={<CheckMark fill="#fff" stroke="#fff" width='40' height='40' />}
                            />
                        </View>
                    </View>
                </ScrollView>
            </Animated.View>
        </Layout>
    );
}

export default Matchs;