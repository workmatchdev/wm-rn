import { Modal, View } from "react-native";

const ModalContainer = ({ children, isOpen, style = {} }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isOpen}
        >
            <View style={style}>
                {children}
            </View>
        </Modal>
    );
}

export default ModalContainer;