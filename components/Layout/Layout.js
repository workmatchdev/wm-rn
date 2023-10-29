import { View } from "react-native";
import styles from "./styles";
import NavigationBar from "../NavigationBar/NavigationBar";
import SideBar from "../SideBar/SideBar";

const Layout = ({children}) => {
    return (
        <View style={styles.container}>
            <SideBar />
            <NavigationBar />
            {children}
        </View>
    );
}
 
export default Layout;