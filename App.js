/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main}>
        <Image source={require("./img/logo.png")} />
        <TouchableOpacity style={styles.button} onPress={this._onClick}>
          <Text style={styles.textButton}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onClick() {
    var num = Math.floor(Math.random() * 5);
    let frases = [
      "olá",
      "Tudo bem?",
      "Você vem sempre aqui",
      "Tudo certo",
      "Estou perdido"
    ];
    var frase = frases[num];
    Alert.alert(frase);
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#538530",
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 15
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "400"
  }
});
