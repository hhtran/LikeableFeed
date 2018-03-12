/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Feed from "./src/screens/Feed";
import { View } from "react-native";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Feed />
      </View>
    );
  }
}