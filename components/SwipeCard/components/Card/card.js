import { View, Text, Image, Platform } from "react-native";
import styles from "./styles";
import RoundedButton from "../../../RoundedButton";
import { XMarck, CheckMark, MessageIcon } from "../../../../src/assets/icons";
import colors from "../../../../src/assets/colors";
import LongTextComponent from "../../../LongTextComponent";

const Card = ({
    handleCloseModal = null,
    buttonTopRight = () => null
}) => {

    const isIOS = Platform.OS === 'ios';

    return (
        <View style={styles.scrollViewContainer}>
            <View style={styles.container}>
                {buttonTopRight()}
                <Text style={styles.title}>Titulo del empleo</Text>
                <Text style={styles.cargo}>Cargo: Test</Text>
                <LongTextComponent
                    style={styles.description}
                    numberOfLines={isIOS ? 20 : 10}
                    handleShowMore={handleCloseModal}
                    showAll={!handleCloseModal}
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia ipsum diam, ac ultrices leo scelerisque non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et est ac quam vulputate ultricies. Phasellus vel varius eros. Donec at velit in sapien dapibus varius. Etiam volutpat nulla mauris, at dignissim magna euismod at. Nullam nec eros quis risus bibendum commodo. Proin nec nulla in nulla sollicitudin molestie sed eu ante. Curabitur id sagittis ipsum. Ut risus leo, sagittis non semper in, porttitor in arcu. Aliquam malesuada efficitur risus, ac accumsan massa sollicitudin id. Curabitur euismod porta urna, id dapibus augue rhoncus nec. Aenean ornare molestie elit nec efficitur. Proin luctus, neque et suscipit mattis, nibh sapien semper augue, eget facilisis magna ipsum ac mauris.
                    Pellentesque at auctor risus. Maecenas eget tempus nisi. Duis tempus aliquam lorem, a rutrum nunc mattis id. Donec placerat, sapien eu efficitur vulputate, mauris elit semper mi, vel vehicula mi tellus porttitor purus. Suspendisse erat dui, porta ut feugiat quis, sodales ac mi. Phasellus aliquam, felis vitae interdum iaculis, libero leo condimentum velit, at consectetur lectus felis eu velit. Pellentesque sagittis augue semper nisi tristique suscipit. Suspendisse posuere lobortis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue vel lorem molestie rutrum. Nullam malesuada mollis dui mollis semper. Morbi massa quam, consequat sed scelerisque eget, auctor eu lectus.`}
                />
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
                {/* <View style={styles.buttonContainer}>
                    <RoundedButton
                        onPress={() => {
                            handleLeftSwipe()
                        }}
                        color={colors.principalRed}
                        icon={<XMarck fill="#fff" stroke="#fff" width='40' height='40' />}
                    />
                    <RoundedButton
                        color={colors.secondarypalColor}
                        icon={<MessageIcon fill="#fff" stroke="#fff" width='40' height='40' />}
                    />
                    <RoundedButton
                        onPress={() => {
                            handleRightSwipe()
                        }}
                        color={colors.principalGreen}
                        icon={<CheckMark fill="#fff" stroke="#fff" width='40' height='40' />}
                    />
                </View> */}
            </View>
        </View>
    );
}

export default Card;