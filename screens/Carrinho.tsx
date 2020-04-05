import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ListItem, Card, Text, Icon } from "react-native-elements";

import styles from "./carrinhoStyle";
import { StackNavigationProp } from "@react-navigation/stack";
interface Props {
  navigation: StackNavigationProp<any>;
}

const users = [
  {
    name: "Arroz Prato Fino 5kg R$ 18,35",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "cenoura vermelha bandeja 500g R$ 1,29",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "filé de peito de frango seara cong 1 kg R$ 9,99",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "batata inglesa bandeja kg R$ 3,99",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "leite longa vida porto alegre intg 1l R$ 3,29",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "limão tahiti bandeja 700g R$ 2,99",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "banana prata bandeja 800g R$ 4,99",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
];

export default function Carrinho() {
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
              R$: 183,78
            </Text>
          </Card>
          <TouchableOpacity style={styles.pagar}>
            <Text style={styles.textPagar}>Pay & Go</Text>
            <Icon name="ios-card" type="ionicon" color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, backgroundColor: "#333" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              borderTopRightRadius: 100,
            }}
          >
            <View style={styles.card}>
              {users.map((u, i) => {
                return (
                  <ListItem
                    style={{ backgroundColor: "#fff" }}
                    chevron={{ color: "#333" }}
                    bottomDivider
                    key={i}
                    title={u.name}
                    leftAvatar={{ source: { uri: u.avatar } }}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
