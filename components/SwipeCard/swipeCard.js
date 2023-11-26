import React, { useState } from 'react';
import { View, ScrollView, TouchableHighlight } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from './components/Card';
import Modal from "../Modal";
import style from './style';
import { XMarck } from '../../src/assets/icons';

const SwipeCard = () => {

    const [cards, setCards] = useState([
        { text: 'Card 1' },
        { text: 'Card 2' },
        { text: 'Card 3' },
    ])

    const [isOpen, setIsOpen] = useState(false)

    const handleYup = (card) => {
        // Lógica al deslizar hacia la derecha (like)
        console.log(`Like para: ${card.text}`);
    };

    const handleNope = (card) => {
        // Lógica al deslizar hacia la izquierda (dislike)
        console.log(`Dislike para: ${card.text}`);
    };

    const handleCloseModal = () => setIsOpen(!isOpen)

    const buttonClose = () => {
        return (
            <TouchableHighlight
                onPress={() => handleCloseModal()}
                underlayColor="#fff"
                style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    zIndex: 9
                }}>
                <XMarck fill="#ff0000" stroke="#ff0000" width='30' height='30' />
            </TouchableHighlight>
        )
    }

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'stretch' }}>
            <Modal style={style.principalContainer} isOpen={isOpen}>
                <ScrollView
                    style={{ flex: 1, padding: 10 }}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                >
                    <Card
                        buttonTopRight={buttonClose}
                    />
                </ScrollView>
            </Modal>
            <SwipeCards
                cards={cards}
                renderCard={(cardData) => <Card handleCloseModal={handleCloseModal} {...cardData} />}
                loop={true} // Si deseas que las tarjetas se repitan una vez mostradas todas
                showYup={true}
                showNope={true}
                handleYup={handleYup}
                handleNope={handleNope}
            />
        </View>
    );
}

export default SwipeCard;
