import React, { Component, useState } from "react";

import styles from "./loginStyle";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";

const appId = "1047121222092614";

interface Props {
  navigation: StackNavigationProp<any>;
}

export default class LoginScreen extends Component<Props> {
  render() {
    return (
      <ImageBackground
        source={require("../assets/img/fundo.png")}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
                <Text style={styles.logoText}>Market</Text>
                <Text style={styles.logoText2}>Code</Text>
                <TextInput
                  placeholder="Usuário"
                  placeholderTextColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                />
                <TextInput
                  placeholder="Senha"
                  placeholderTextColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  secureTextEntry={true}
                />
                <Button
                  buttonStyle={styles.loginButton}
                  onPress={() =>
                    this.props.navigation.reset({
                      index: 0,
                      routes: [{ name: "Home" }],
                    })
                  }
                  title="Login"
                />
                <Button
                  buttonStyle={styles.fbLoginButton}
                  onPress={() => this.onLoginPress()}
                  title="Crie sua conta"
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onLoginPress() {}

  // async onFbLoginPress() {
  //   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
  //     permissions: ['public_profile', 'email'],
  //   });
  //   if (type === 'success') {
  //     const response = await fetch(
  //       `https://graph.facebook.com/me?access_token=${token}`);
  //     Alert.alert(
  //       'Logged in!',
  //       `Hi ${(await response.json()).name}!`,
  //     );
  //   }
  // }
}
