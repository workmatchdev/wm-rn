import InputText from "../InputText/InputText";
import { View } from "react-native";
import styles from "./styles";

const InputList = () => {
    return (
        <View style={styles.generalContainer}>
            <InputText
                styles={styles.inputContainer}
                inputStyles={styles.input}
                labelStyles={styles.label}
                label='Palabras clave'
            />
            <View>
                
            </View>
        </View>
    );
}

export default InputList;