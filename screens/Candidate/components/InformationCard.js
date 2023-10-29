import { View, Text } from 'react-native';
import styles from '../styles';

const EducationCard = () => {
    return (
        <View style={styles.educationCard}>
            <Text style={styles.semiboldText}>UNAM</Text>
            <Text style={styles.ligthText}>Desarrolloador de Software</Text>
            <Text style={styles.ligthText}> ene 2023 - jul 2024 </Text>
        </View>
    );
}

export default EducationCard;