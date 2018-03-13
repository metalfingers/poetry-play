/**
 *	* https://github.com/tongyy/react-native-draggable
 *
 */

import React, { Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  Image,
  PanResponder,
  Animated,
  Dimensions,
  TouchableOpacity
} from "react-native"

export default class Draggable extends Component {
  componentWillMount() {
    this.state.pan.addListener(c => (this.state._value = c))
  }
  componentWillUnmount() {
    this.state.pan.removeAllListeners()
  }
  constructor(props) {
    super(props)

    this.state = {
      pan: new Animated.ValueXY(),
      _value: { x: 0, y: 0 }
    }

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this.state._value.x,
          y: this.state._value.y
        })
        this.state.pan.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.state.pan.flattenOffset()
      }
    })
  }

  render() {
    return (
      <View
        style={{
          position: "absolute",
          top: this.props.offsetY,
          left: this.props.offsetX
        }}
      >
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            this.state.pan.getLayout(),
            styles.rect,
            { backgroundColor: this.props.bgColor }
          ]}
        >
          <Text>{this.props.text}</Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rect: {
    alignSelf: "flex-start",
    padding: 20
  }
})
