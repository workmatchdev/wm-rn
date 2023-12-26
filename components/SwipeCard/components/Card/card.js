import { View } from "react-native";
import styles from "./styles";
import CardCompany from "../CardCompany/cardCompany";
import CardApplicant from "../CardApplicants/cardApplicant";
import useSession from "../../../../hooks/sessions/useSession";

const Card = ({
    handleCloseModal = null,
    buttonTopRight = () => null,
    cardData
}) => {
    const { isBussiness } = useSession();
    return (
        <View style={styles.scrollViewContainer}>
            <View style={styles.container}>
                {buttonTopRight()}
                {!isBussiness ? (
                    <CardCompany handleCloseModal={handleCloseModal} styles={styles} data={cardData} />
                ) : (
                    <CardApplicant handleCloseModal={handleCloseModal} styles={styles} data={cardData} />
                )}
            </View>
        </View>
    );
}

export default Card;