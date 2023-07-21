import { View } from "react-native";
import styles from "./styles";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = ({children}) => {
    return (
        <View style={styles.container}>
            {/* <NavigationBar /> */}
            {children}
        </View>
    );
}
 
export default Layout;