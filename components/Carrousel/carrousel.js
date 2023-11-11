import React, { useState, useRef } from 'react';
import {
    Text,
    View,
    SafeAreaView,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const Carrousel = ({ carouselItems, renderComponent }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselRef = useRef(null);

    const renderItem = (props) => {
        return renderComponent(props)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'stretch', height: '100%' }}>
                <Carousel
                    layout={"default"}
                    ref={carouselRef}
                    data={carouselItems}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
            </View>
        </SafeAreaView>
    );
};

export default Carrousel;