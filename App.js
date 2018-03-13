import React from "react"
import { StyleSheet, Button, Text, StatusBar, View } from "react-native"
import { NativeRouter, Route, Link, Redirect } from "react-router-native"

//pages
import Home from "./screens/Home"
import Play from "./screens/Play"

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1, paddingTop: 20, backgroundColor: "#fff" }}>
          <StatusBar barStyle="light-content" />
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" component={Play} />
          <Route path="/play" component={Play} />
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
