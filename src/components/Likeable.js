import React, { Component } from "react";
import { View, StyleSheet, PanResponder, Animated } from "react-native";
import { Icon } from "native-base";


const DELAY = 300;
const RADIUS = 20;

// PanResponders modelled from https://github.com/dwicao/react-native-double-click

export default class Likeable extends Component {
  constructor() {
    super();
    this._doubleTapPanResponder = {};
    this.prevTouchInfo = {
      prevTouchX: 0,
      prevTouchY: 0,
      prevTouchTimestamp: 0
    };
    this.state = { heartScale: new Animated.Value(0) }
  }

  componentWillMount() {
    this._doubleTapPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: this.handlePanResponderGrant
    });
  }

  isDoubleTap = (currentTimestamp, gestureState) => {
    const distance = (x0, y0, x1, y1) => Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
    const { prevTouchX, prevTouchY, prevTouchTimestamp } = this.prevTouchInfo;
    const dt = currentTimestamp - prevTouchTimestamp;
    return (dt <= DELAY && distance(prevTouchX, prevTouchY, gestureState.x0, gestureState.y0) <= RADIUS);
  }

  animateHeart = () => {
    Animated.sequence([
      Animated.timing(this.state.heartScale, { toValue: 1.5, duration: 300 }),
      Animated.timing(this.state.heartScale, { toValue: 0, duration: 200, delay: 100 })
    ]).start();
  }

  handlePanResponderGrant = (evt, gestureState) => {
    const currentTimestamp = Date.now();
    if (this.isDoubleTap(currentTimestamp, gestureState)) {
      this.animateHeart();
      this.props.onDoubleTap();
    }
    this.prevTouchInfo = {
      prevTouchX: gestureState.x0,
      prevTouchY: gestureState.y0,
      prevTouchTimestamp: currentTimestamp
    };
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <View {...props} {...this._doubleTapPanResponder.panHandlers}>
        { this.props.children }
        <Animated.View style={{
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          flex: 1,
          transform: [
            { scale: this.state.heartScale }
          ]}}>
          <Icon name="ios-heart" style={styles.heart} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heart: {
    backgroundColor: "transparent",
    fontSize: 96,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    shadowOpacity: 0.5,
    shadowColor: "black",
    shadowRadius: 8.0,
    shadowOffset: {
      height: 1.0,
      width: 0
    }
  },
});