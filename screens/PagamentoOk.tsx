import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import LottieView from "lottie-react-native";
import { Text, Icon } from "react-native-elements";

import styles from "./PagamentoOkStyle";

interface Props {
  navigation: StackNavigationProp<any>;
}

const PagamentoOk: React.FC<Props> = ({ navigation }) => {
  const animation = useRef(null);

  const onPress = () => {
    animation.current.play();
  };
  useEffect(() => {
    onPress();
  }, []);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#d1677a" }}>
        <LottieView
          source={require("../assets/anima.json")}
          ref={animation}
          style={{
            width: 400,
            height: 400,
            alignSelf: "center",
          }}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "#d1677a" }}>
        <TouchableOpacity style={styles.Sair}>
          <Text style={styles.textoSair}>Nota Fiscal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Sair}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textoSair}>voltar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default PagamentoOk;
