import React from "react";
import GestureRecognizer from "react-native-swipe-detect";
import useSwipe from "./hooks/useSwipe";

const Swipe = (props) => {
  const {
    children,
    handleLeftSwipe,
    handleRightSwipe
  } = props;
  const {
    config,
    onSwipeRight,
    onSwipeLeft
  } = useSwipe({
    handleLeftSwipe,
    handleRightSwipe
  })
  return (
    <GestureRecognizer
      onSwipeLeft={(state) => onSwipeLeft(state)}
      onSwipeRight={(state) => onSwipeRight(state)}
      config={config}
    >
      {children}
    </GestureRecognizer>
  );
};

export default Swipe;
