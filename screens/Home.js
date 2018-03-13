import React, { Component } from "react"
import { View, StyleSheet, Text } from "react-native"
import { NativeRouter, Route, Link, Redirect } from "react-router-native"

export default class Home extends Component {
  render() {
    return (
      <View>
        <Link to="/play" style={{ marginTop: 100, alignSelf: "center"}}>
          <Text>play!</Text>
        </Link>
      </View>
    )
  }
}
