import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions  } from 'react-native';
import colors from '../../src/assets/colors';

const LongTextComponent = ({ text, style, numberOfLines = 0, handleShowMore, showAll = false }) => {
    const [showFullText, setShowFullText] = useState(showAll);
    const [numberLine, setNumberLines] = useState(0)
    const toggleText = () => {
        if (handleShowMore) return handleShowMore()
        setShowFullText(!showFullText);
    };

    return (
        <View style={styles.container}>
            <Text style={style}
             onLayout={(event) => {
                const { height, width: widthLayout } = event.nativeEvent.layout;
                const { width } = Dimensions.get('window');

                const approximateLineHeight = 18;
                const maxHeight = 250;
      
                const calculatedLines = Math.min(
                  Math.floor(height / approximateLineHeight),
                  Math.floor(maxHeight / approximateLineHeight)
                );
                setNumberLines(calculatedLines)
              }}
            numberOfLines={showFullText ? undefined : numberOfLines}>{text}</Text>
            {!showFullText && numberLine > numberOfLines   && (
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
