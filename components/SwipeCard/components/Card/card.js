import { View, Text, Image, Platform } from "react-native";
import styles from "./styles";
import { useMemo } from "react";
import RoundedButton from "../../../RoundedButton";
import { XMarck, CheckMark, MessageIcon } from "../../../../src/assets/icons";
import colors from "../../../../src/assets/colors";
import LongTextComponent from "../../../LongTextComponent";

const Card = ({
    handleCloseModal = null,
    buttonTopRight = () => null,
    cardData
}) => {

    const isIOS = Platform.OS === 'ios';
    const { 
        title,
        position,
        description,
        maximumSalary,
        minimumSalary,
        term,
        company: {
            image,
            profile: {
                bussinesName,
            }
        }
    } = cardData  || {};

    const currentImage = useMemo(() => {
        if(image?.url !== 'default') return { uri: image.url }
        return require('../../../../src/img/user.png')
    }, [image])

    const formattedAmount = (number) => number.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
      });

    const salary = {
        max: formattedAmount(Number(maximumSalary)),
        min: formattedAmount(Number(minimumSalary))
    }

    return (
        <View style={styles.scrollViewContainer}>
            <View style={styles.container}>
                {buttonTopRight()}
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.cargo}>Cargo: {position}</Text>
                <LongTextComponent
                    style={styles.description}
                    numberOfLines={isIOS ? 20 : 10}
                    handleShowMore={() => handleCloseModal(cardData)}
                    showAll={!handleCloseModal}
                    text={description}
                />
                <View>
                    <View style={styles.contianerRow}>
                        <Text style={styles.labelContainer}>Salario:</Text>
                        <Text style={styles.infoContainer}>{salary.min} - {salary.max}</Text>
                    </View>
                    <View style={styles.contianerRow}>
                        <Text style={styles.labelContainer}>Plazo:</Text>
                        <Text style={styles.infoContainer}>{term}</Text>
                    </View>
                </View>
                <View style={styles.bussinesContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={currentImage}
                        />
                    </View>
                    <View>
                        <Text style={styles.bussinesName}>{bussinesName}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Card;