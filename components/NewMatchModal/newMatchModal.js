import ConfettiCannon from 'react-native-confetti-cannon';
import Modal from '../Modal';
import colors from '../../src/assets/colors';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import useSession from '../../hooks/sessions/useSession';

const NewMatchModal = (props) => {
    const { openModal, onClose } = props;
    const { isBussiness } = useSession();
    const ref = useRef();
    return (
        <Modal
            isOpen={openModal}
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                paddingHorizontal: 10
            }}
        >
            <View
                style={{
                    flex: 1,
                    height: '100%',
                    padding: 20,
                    backgroundColor: '#fff',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 18,
                        color: '#000',
                        marginBottom: 15
                    }} >Felicidades tienes un nuevo match</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 18
                    }} >Ve a tus chats para poder contactar con {!isBussiness ? 'la empresa' : 'el aplicante'}</Text>

                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginTop: 25,
                            width: '100%'
                        }}
                    >
                        <View>
                            <Image
                                source={require('../../src/img/firework2.png')}
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                        <View>
                            <Image
                                source={require('../../src/img/firework2.png')}
                                style={{ width: 100, height: 100, transform: [{ scaleX: -1 }] }}
                            />
                        </View>
                    </View>

                </View>

                <ConfettiCannon
                    autoStart={true}
                    count={300}
                    onAnimationEnd={() => {
                        ref.current.stop()
                    }}
                    origin={{ x: -10, y: 0 }}
                    ref={ref}
                />
                <TouchableHighlight
                    style={{
                        width: '100%',
                        backgroundColor: colors.principalColor,
                        padding: 10,
                        borderRadius: 8,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={onClose}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            color: '#fff',
                            fontFamily: 'Nunito-Bold'
                        }}
                    >Aceptar</Text>
                </TouchableHighlight>
            </View>
        </Modal>
    );
}

export default NewMatchModal;