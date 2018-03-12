import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import Post from "../components/Post";

export default class Feed extends Component {



  render() {
    return (
      <View style={{ flex: 1}}>
        <ScrollView>
          <Post onDoubleTap={() => console.log("DOUBLE TAP!")}/>
          <Post onDoubleTap={() => console.log("DOUBLE TAP!")}/>
          <Post onDoubleTap={() => console.log("DOUBLE TAP!")}/>
          <Post onDoubleTap={() => console.log("DOUBLE TAP!")}/>
          <Post onDoubleTap={() => console.log("DOUBLE TAP!")}/>
          <Post onDoubleTap={() => console.log("DOUBLE TAP!")}/>
          <Post onDoubleTap={() => console.log("DOUBLE TAP!")}/>
          <Post onDoubleTap={() => console.log("DOUBLE TAP!")}/>
        </ScrollView>
      </View>
    );
  }

}