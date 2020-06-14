import React from "react";
import { View, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { ListItem, Card, Text, Icon } from "react-native-elements";

import styles from "./carrinhoStyle";
import { StackNavigationProp } from "@react-navigation/stack";
import PagamentoOk from "./PagamentoOk";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import CarrinhoContext from "../CarrinhoContext";
import Produto from "../model/Produto";
interface Props {
  navigation: StackNavigationProp<any>;
}

const users = [
  {
    name: "Arroz Prato Fino 5kg R$ 9,00",
    avatar:
      "https://villalourdes.com.br/web/image/product.product/300/image_1024/%5B4504%5D%20ARROZ%20PRATO%20FINO%20TIPO%201%202KG?unique=fa60880",
  },
  {
    name: "cenoura vermelha bandeja 500g R$ 1,29",
    avatar:
      "https://supernossoemcasa.vteximg.com.br/arquivos/ids/202688-1000-1000/162863.jpg?v=637037154523300000",
  },
  {
    name: "filé de peito de frango seara cong 1 kg R$ 9,99",
    avatar:
      "https://supernossoemcasa.vteximg.com.br/arquivos/ids/187552-1000-1000/FILE-PEITO-FGO-SEARA-1KG-BJ-CONG.jpg?v=637002225072070000",
  },
  {
    name: "batata inglesa bandeja kg R$ 3,99",
    avatar:
      "https://supernossoemcasa.vteximg.com.br/arquivos/ids/202295-1000-1000/163323.jpg?v=637036572202800000",
  },
  {
    name: "leite longa vida porto alegre intg 1l R$ 3,29",
    avatar:
      "https://supernossoemcasa.vteximg.com.br/arquivos/ids/219465-200-200/154923.jpg?v=637136718933500000",
  },
  {
    name: "leite em pó ninho forti+ integral instantâneo 400g R$ 14,99",
    avatar:
      "https://supernossoemcasa.vteximg.com.br/arquivos/ids/217126-200-200/cbd3aa5cd0c2feffc219c4e65c10bf65_leite-em-po-ninho-forti--integral-instantaneo-400g_lett_1.jpg?v=637100379863830000",
  },
  {
    name: "banana prata bandeja 800g R$ 4,99",
    avatar:
      "https://supernossoemcasa.vteximg.com.br/arquivos/ids/187022-200-200/BANANA-PRATA-800G-BJ.jpg?v=637002222072900000",
  },
];

const Carrinho: React.FC<Props> = ({ navigation }) => {
  const carrinhoContext = React.useContext(CarrinhoContext);

  const comprar = async () => {
    const config = {
      method: "POST",
      body: JSON.stringify(carrinhoContext.carrinho),
    };

    await fetch("URL", config).then(() => {
        navigation.navigate("PagamentoOk");
      }).catch(e => {
        Alert.alert("Atenção","Compra não efetuada!!!!");
      });
  };

  const [valorTotal] = React.useState(
    carrinhoContext.carrinho.reduce(
      (previousValue, currentValue, currentIndex, array) =>
        previousValue + currentValue.quantidade * currentValue.valor,
      0.0
    )
  );

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#333",
            borderBottomLeftRadius: 100,
          }}
        >
          <Card containerStyle={styles.price}>
            <Text h2 h2Style={styles.fontPrice}>
              Preço total:
            </Text>
            <Text h3 h3Style={styles.fontPrice2}>
              R$: {valorTotal}
            </Text>
          </Card>
          <TouchableOpacity style={styles.pagar} onPress={comprar}>
            <Text style={styles.textPagar}>Pay & Go</Text>
            <Icon name="ios-card" type="ionicon" color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, backgroundColor: "#333" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              borderTopRightRadius: 90,
            }}
          >
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
                <View style={styles.card}>
                  {carrinhoContext.carrinho.map((u: Produto, i) => {
                    return (
                      <ListItem
                        style={{ backgroundColor: "#fff" }}
                        chevron={{ color: "#333" }}
                        bottomDivider
                        key={i}
                        title={u.nome}
                        subtitle={u.valor.toString()}
                        //leftAvatar={{ source: { uri: u.avatar } }}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </>
  );
};
export default Carrinho;
