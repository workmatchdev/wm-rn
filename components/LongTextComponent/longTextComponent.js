import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import colors from '../../src/assets/colors';

const LongTextComponent = ({ text, style, numberOfLines = 0, handleShowMore, showAll = false }) => {
    const [showFullText, setShowFullText] = useState(showAll);
    const toggleText = () => {
        if (handleShowMore) return handleShowMore()
        setShowFullText(!showFullText);
    };
    return (
        <View style={styles.container}>
            <Text style={style} numberOfLines={showFullText ? undefined : numberOfLines}>{text}</Text>
            {!showFullText && (
                <Button title="Ver más" onPress={toggleText} color={colors.principalColor} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        alignItems: 'flex-start',
    },
});

export default LongTextComponent;
