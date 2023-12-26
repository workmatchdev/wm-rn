import { View, Text, Image, Platform } from "react-native";
import LongTextComponent from '../../../LongTextComponent';
import { useMemo } from "react";

const CardApplicant = (props) => {
    const { styles, data, handleCloseModal } = props;
    const {
        email,
        image,
        lastName,
        name,
        profile: {
            description,
            skills,
            website
        }
    } = data;

    const currentImage = useMemo(() => {
        if (image?.url !== 'default') return { uri: image.url }
        return require('../../../../src/img/user.png')
    }, [image])

    const fullName = `${name} ${lastName}`;

    const isIOS = Platform.OS === 'ios';

    return (
        <View>
            <Text style={styles.title}>{fullName}</Text>
            <View style={styles.bussinesContainer}>
                <View style={styles.logoContainerApplicant}>
                    <Image
                        style={styles.logoApplicant}
                        source={currentImage}
                    />
                </View>
            </View>
            {/* <Text style={styles.cargo}>Cargo: {position}</Text> */}
            <LongTextComponent
                style={styles.description}
                numberOfLines={isIOS ? 15 : 3}
                handleShowMore={() => handleCloseModal(data)}
                showAll={!handleCloseModal}
                text={description}
            />
            <Text style={styles.cargo}>Aptitudes y habilidades</Text>
            <View style={styles.skillList}>
                {skills.map((skill, i) => {
                    if((isIOS && i > 10) || (!isIOS && i > 7)) return null;
                    return <Text style={styles.skillItem} >{skill.skill}</Text>
                })}
            </View>
            <Text style={styles.cargo}>{email}</Text>
            <Text style={styles.cargo}>{website}</Text>
        </View>
    );
}

export default CardApplicant;