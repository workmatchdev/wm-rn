import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableHighlight, Text } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from './components/Card';
import Modal from "../Modal";
import style from './style';
import { XMarck } from '../../src/assets/icons';
import useSwipeCard from './hooks/useSwipeCard';
import { XmarkIcon } from '../../src/assets/icons';
import NewMatchModal from '../NewMatchModal/newMatchModal';

const SwipeCard = ({ currentJob }) => {
    const {
        error,
        listJobsMatch,
        openNewModal,
        handleYup,
        handleNope,
        cardRemoved,
        onCloseNewMatchModal,
        setGetCards
    } = useSwipeCard({
        currentJob
    });
    const [isOpen, setIsOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState({})

    const handleCloseModal = (cardData) => {
        if (!isOpen) setCurrentCard(cardData)
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

    if (error) return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingVertical: 40, paddingHorizontal: 10 }}>
                <View style={{ marginBottom: 10, borderWidth: 3, borderColor: '#EE2B2B', borderRadius: 50, padding: 5 }}>
                    <XmarkIcon width={60} height={60} fill='#EE2B2B' />
                </View>
                <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 18, color: '#fff', backgroundColor: '#EE2B2B', padding: 10, borderRadius: 5 }} >{error}</Text>
            </View>
        </View>
    )

    const noMoreCards = (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 18 }} >No se han encontrado mas coincidencias</Text>
            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 18 }} >Por favor intenta mas tarde</Text>
        </View>
    )

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'stretch' }}>
            <NewMatchModal openModal={openNewModal} onClose={onCloseNewMatchModal} />
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
                renderNoMoreCards={() => {
                    setGetCards(true)
                    return noMoreCards
                }}
                cards={listJobsMatch}
                renderCard={(cardData) => <Card handleCloseModal={handleCloseModal} cardData={cardData} />}
                loop={false}
                showYup={true}
                showNope={true}
                verticalSwipe={false}
                handleYup={handleYup}
                handleNope={handleNope}
                cardRemoved={(card) => cardRemoved(card)}
                yupText={'Like'}
                noText={'Nope'}
            />
        </View>
    );
}

export default SwipeCard;
