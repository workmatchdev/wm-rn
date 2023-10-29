import { Animated, PanResponder, Easing } from "react-native";
import { useState, useRef } from "react";

const useMatchs = ({ generalContainer }) => {

    const spinValue = new Animated.Value(0);
    const opacity = useRef(new Animated.Value(1)).current;
    const rotateLeft = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-25deg']
    })
    const rotateRight = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '25deg']
    })
    const [rotate, setRotate] = useState(rotateLeft)

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null,
                {
                    dx: generalContainer.x,
                    dy: generalContainer.y,
                },
            ],
                {
                    listener: (_, gestureState) => {
                        const movement = gestureState.dx < 100 && gestureState.dx > -100 ? 0 : 1;
                        if (gestureState.dx < 0) {
                            setRotate(rotateLeft)
                        } else {
                            setRotate(rotateRight)
                        }
                        Animated.timing(spinValue, {
                            toValue: movement,
                            duration: 80,
                            easing: Easing.linear,
                            useNativeDriver: false
                        }).start();
                    },
                }
            ),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > 250) {
                    return handleRightSwipe()
                }
                if (gestureState.dx < -250) {
                    return handleLeftSwipe()
                }
                Animated.parallel([
                    Animated.spring(generalContainer, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }),
                    Animated.timing(spinValue, {
                        toValue: 0,
                        duration: 150,
                        easing: Easing.linear,
                        useNativeDriver: false
                    })
                ]).start();
            },
        }),
    ).current;

    const handleLeftSwipe = () => {
        setRotate(rotateLeft)
        Animated.sequence([
            Animated.parallel([
                Animated.spring(generalContainer, {
                    toValue: { x: -500, y: 0 },
                    useNativeDriver: false,
                }),
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 2500,
                    easing: Easing.linear,
                    useNativeDriver: false
                })
            ]),
            Animated.delay(100),
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: false,
                }),
                Animated.parallel([
                    Animated.spring(generalContainer, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }),
                    Animated.timing(spinValue, {
                        toValue: 0,
                        duration: 0,
                        easing: Easing.linear,
                        useNativeDriver: false
                    })
                ]),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: false,
                })
            ])
        ]).start();
    }

    const handleRightSwipe = () => {
        setRotate(rotateRight)
        Animated.sequence([
            Animated.parallel([
                Animated.spring(generalContainer, {
                    toValue: { x: 500, y: 0 },
                    useNativeDriver: false,
                }),
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 80,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
            ]),
            Animated.delay(100),
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: false,
                }),
                Animated.parallel([
                    Animated.spring(generalContainer, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }),
                    Animated.timing(spinValue, {
                        toValue: 0,
                        duration: 0,
                        easing: Easing.linear,
                        useNativeDriver: false
                    })
                ]),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: false,
                })
            ])
        ]).start();
    }

    return {
        handleLeftSwipe,
        handleRightSwipe,
        panResponder,
        rotate,
        opacity
    };
}

export default useMatchs;