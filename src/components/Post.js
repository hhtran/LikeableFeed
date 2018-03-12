import React, { Component } from "react";
import { View, Text, Image, StyleSheet, PanResponder } from "react-native";
import Likeable from "./Likeable";

export class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBar}>fe
          <Image source={require("../../assets/images/face.png" )} style={styles.avatar} />
          <Text style={styles.username}>Henry Tran</Text>
        </View>
        <Likeable style={styles.imageContainer} onDoubleTap={this.props.onDoubleTap}>
          <Image source={require("../../assets/images/chihuahua.jpg")} style={styles.postImage} />
        </Likeable>
      </View>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  titleBar: {
    padding: 10,
    height: 60,
    flexDirection: "row",
  },
  username: {
    lineHeight: 40,
    marginLeft: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  imageContainer: {
    height: 350,
    width: "100%"
  },
  postImage: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    resizeMode: "cover"
  },
 
})