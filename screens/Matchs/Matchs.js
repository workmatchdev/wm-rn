import { View, Text, Image } from "react-native";
import Layout from '../../components/Layout';
import { Button } from "react-native";
import styles from "./styles";

const Matchs = () => {
    return (
        <Layout>
            <View style={styles.principalContainer}>
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
                    <View>
                        <Button
                            title="Ok"
                            color={'green'}
                        />
                        <Button
                            title="No"
                            color={'red'}
                        />
                    </View>
                </View>
            </View>
        </Layout>
    );
}

export default Matchs;