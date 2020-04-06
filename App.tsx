import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./components/login";
import Home from "./screens/Home";
import Carrinho from "./screens/Carrinho";
import PagamentoOk from "./screens/PagamentoOk";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Image } from "react-native";
import { Icon } from "react-native-elements";
import * as Font from "expo-font";

const Stack = createStackNavigator();

const App = () => {
  const cacheImages = (images: Array<any>) => {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  };
  function cacheFonts(fonts: any[]) {
    return fonts.map((font) => Font.loadAsync(font));
  }

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([require("./assets/img/fundo.png")]);

    await Promise.all([...imageAssets]);
    await Font.loadAsync({
      Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    });
  };

  const [isReady, setisReady] = useState(false);
  const [inicialState, setInicialState] = useState("LoginScreen");
  if (!isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setisReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#333", shadowColor: "transparent" },
        }}
        initialRouteName={inicialState}
      >
        <Stack.Screen
          name="PagamentoOk"
          component={PagamentoOk}
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRightContainerStyle: { marginRight: 30 },
            headerRight: () => (
              <Icon name="ios-menu" type="ionicon" color="#fff" />
            ),
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
