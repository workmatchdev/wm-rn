import { View, Text, Image, Platform } from "react-native";
import LongTextComponent from '../../../LongTextComponent';
import { useMemo } from "react";

const CardCompany = (props) => {
    const { styles, data, handleCloseModal } = props;
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
    } = data || {};

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

    const isIOS = Platform.OS === 'ios';

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cargo}>Cargo: {position}</Text>
            <LongTextComponent
                style={styles.description}
                numberOfLines={isIOS ? 20 : 10}
                handleShowMore={() => handleCloseModal(data)}
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
    );
}

export default CardCompany;