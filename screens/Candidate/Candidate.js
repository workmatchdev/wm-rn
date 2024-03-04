import { ScrollView, View, Text } from 'react-native';
import ImageContainer from '../../components/Image';
import Layout from '../../components/Layout';
import styles from './styles';
import InformationCard from './components/InformationCard';

const Candidate = () => {
    return (
        <Layout>
            <ScrollView>
                <View style={styles.postulationContainer}>
                    <View style={styles.dataContainer}>
                        <View style={styles.imageContainer}>
                            <ImageContainer
                                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'}
                                imageContainerStyles={styles.logoContainer}
                                imageStyles={styles.logo}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.ligthText}>Web Developer</Text>
                            <Text style={styles.ligthText}>Postulacion: Vacante numero 1</Text>
                            <View style={styles['match']}>
                                <Text style={styles.statustext}>
                                    Match
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.informationContainer}>
                        <Text style={styles.pricipalTitle}>Acerca de</Text>
                        <View style={styles.acercaDe}>
                            <Text style={styles.ligthText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tortor dignissim, ullamcorper diam a, dapibus nisi. Curabitur mattis ex leo, et vulputate nunc pharetra ut. Integer non ante metus. Aliquam a velit euismod, vulputate felis sit amet, convallis justo. Vivamus consequat ex rhoncus, auctor risus id, mattis nunc. Proin imperdiet mauris sed tincidunt ullamcorper. Curabitur ac turpis pharetra dolor lobortis tempor a vel purus. Mauris pulvinar ut dui non posuere. Mauris bibendum ac eros eget euismod. Nullam a ex sed felis cursus ullamcorper. Proin felis ligula, maximus et gravida nec, laoreet ut lorem. Cras ac fermentum urna. Pellentesque vehicula neque nibh, nec eleifend enim condimentum sit amet. Duis imperdiet purus mi, id facilisis justo lacinia venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.informationContainer}>
                        <Text style={styles.pricipalTitle}>Educacion</Text>
                        <InformationCard />
                        <InformationCard />
                        <InformationCard />
                    </View>
                    <View style={styles.informationContainer}>
                        <Text style={styles.pricipalTitle}>Experiencia</Text>
                        <InformationCard />
                        <InformationCard />
                        <InformationCard />
                    </View>
                    <View style={styles.informationContainer}>
                        <Text style={styles.pricipalTitle}>Conocimientos y aptitudes</Text>
                        <InformationCard />
                        <InformationCard />
                        <InformationCard />
                    </View>
                </View>

            </ScrollView>
        </Layout>
    );
}

export default Candidate;