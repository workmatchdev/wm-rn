import { Image, View } from "react-native";

const ImageContainer = ({ url, imageContainerStyles = {}, imageStyles = {} }) => {
    if (!url) return null
    return (
        <View style={imageContainerStyles}>
            <Image
                style={imageStyles}
                source={{
                    uri: url
                }}
            />
        </View>
    );
}

export default ImageContainer;