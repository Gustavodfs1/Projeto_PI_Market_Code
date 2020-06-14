import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { Badge } from "react-native-elements";
import { Camera, BarCodeScanningResult } from "expo-camera";

import styles from "./homeStyle";
import CardAddItemToCart from "../components/cardAddItemToCart";
import { StackNavigationProp } from "@react-navigation/stack";
import Produto from "../model/Produto";
import CarrinhoContext from "../CarrinhoContext";

interface Props {
  navigation: StackNavigationProp<any>;
}

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
];

const Home: React.FC<Props> = ({ navigation }) => {
  const [barCode, setBarCode] = useState("");
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);

  const carrinhoContext = React.useContext(CarrinhoContext);

  const reconhecimentoCode = async (scanningResult: BarCodeScanningResult) => {
    setBarCode(scanningResult.data);
    //TODO chamar api produto
    await fetch("URL").then(result => result.json()).then((produto:Produto) => {
      carrinhoContext.adicionarCarrinho(produto);
    });
    //TODO screen de loading

  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#333" }}>
      <Camera
        onBarCodeScanned={reconhecimentoCode}
        style={{
          flex: 1,
          marginLeft: 30,
          marginRight: 30,
          marginTop: 30,
        }}
        type={Camera.Constants.Type.back}
        barCodeScannerSettings={{
          barCodeTypes: ["qr"],
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        ></View>
      </Camera>
      <View style={{ flex: 1 }}>
        <CardAddItemToCart data={barCode} navigation={navigation} />
      </View>
    </View>
  );
};
export default Home;
