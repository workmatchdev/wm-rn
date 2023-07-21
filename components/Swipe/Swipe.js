import React, { useState } from "react";
import { View, Text } from "react-native";
import GestureRecognizer, { swipeDirections } from "react-native-swipe-detect";

const Swipe = () => {
  const [myText, setMyText] = useState("I'm ready to get swiped!");
  const [gestureName, setGestureName] = useState("none");
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const onSwipeUp = (gestureState) => {
    setMyText("You swiped up!");
  };

  const onSwipeDown = (gestureState) => {
    setMyText("You swiped down!");
  };

  const onSwipeLeft = (gestureState) => {
    setMyText("You swiped left!");
  };

  const onSwipeRight = (gestureState) => {
    setMyText("You swiped right!");
  };

  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    setGestureName(gestureName);
    switch (gestureName) {
      case SWIPE_UP:
        setBackgroundColor("red");
        break;
      case SWIPE_DOWN:
        setBackgroundColor("green");
        break;
      case SWIPE_LEFT:
        setBackgroundColor("blue");
        break;
      case SWIPE_RIGHT:
        setBackgroundColor("yellow");
        break;
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      onSwipeUp={(state) => onSwipeUp(state)}
      onSwipeDown={(state) => onSwipeDown(state)}
      onSwipeLeft={(state) => onSwipeLeft(state)}
      onSwipeRight={(state) => onSwipeRight(state)}
      config={config}
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      <Text>{myText}</Text>
      <Text>onSwipe callback received gesture: {gestureName}</Text>
    </GestureRecognizer>
  );
};

export default Swipe;
