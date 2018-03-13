import React, { Component } from "react"
import { View, StyleSheet, Text, Alert } from "react-native"
import Draggable from "./Draggable"

export default class Play extends Component {
  render() {
    return (
      <View>
        <Draggable bgColor="#DAF7A6" offsetX={300} offsetY={200} text="Pat" />
        <Draggable bgColor="#FFC300" offsetX={200} offsetY={300} text="on" />
        <Draggable bgColor="#FF5733" offsetX={100} offsetY={50} text="Hat" />
      </View>
    )
  }
}
