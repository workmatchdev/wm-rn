import { swipeDirections } from "react-native-swipe-detect";


const useSwipe = (props) => {

    const {
        handleLeftSwipe,
        handleRightSwipe
    } = props;

    const onSwipeLeft = (gestureState) => {
        
        handleLeftSwipe()
    };

    const onSwipeRight = (gestureState) => {
        handleRightSwipe()
    };

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 150,
    };

    return {
        config,
        onSwipeRight,
        onSwipeLeft
    };
}

export default useSwipe;