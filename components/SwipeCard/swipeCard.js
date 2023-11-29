import React, { useState } from 'react';
import { View, ScrollView, TouchableHighlight, Text } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from './components/Card';
import Modal from "../Modal";
import style from './style';
import { XMarck } from '../../src/assets/icons';
import useSwipeCard from './hooks/useSwipeCard';

const SwipeCard = () => {
    const { listJobsMatch } = useSwipeCard();
    const [isOpen, setIsOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState({})
    const handleYup = (card) => {
        // Lógica al deslizar hacia la derecha (like)
        console.log(`Like para: ${card.text}`);
    };

    const handleNope = (card) => {
        // Lógica al deslizar hacia la izquierda (dislike)
        console.log(`Dislike para: ${card.text}`);
    };

    const handleCloseModal = (cardData) => {
        if(!isOpen) setCurrentCard(cardData)
        setIsOpen(!isOpen)
    }

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
                        cardData={currentCard}
                        buttonTopRight={buttonClose}
                    />
                </ScrollView>
            </Modal>
            <SwipeCards
                renderNoMoreCards={() => (
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 18 }} >No se han encontrado mas coincidencias</Text>
                        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 18 }} >Por favor intenta mas tarde</Text>
                    </View>
                )}
                cards={listJobsMatch}
                renderCard={(cardData) => <Card handleCloseModal={handleCloseModal} cardData={cardData} />}
                loop={false}
                showYup={true}
                showNope={true}
                handleYup={handleYup}
                handleNope={handleNope}
                yupText={'Like'}
                noText={'Nope'}
            />
        </View>
    );
}

export default SwipeCard;
