import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button, Badge } from "react-native-elements";
import { Icon } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import Carrinho from "../screens/Carrinho";

interface Props {
  data: string;
  navigation: StackNavigationProp<any>;
}

const CardAddItemToCart: React.FC<Props> = ({ data, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardText}>
          {data != null && data.length > 0 && (
            <>
              <Text style={styles.text}>Arroz Prato Fino 5kg</Text>
              <Text style={styles.price}>R$ 9,00</Text>
            </>
          )}
        </View>
        <View style={styles.cardButton}>
          <Button
            title="Adicionar ao carrinho"
            buttonStyle={styles.button}
            disabled={data == null || data.length === 0}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Icon reverse name="ios-trash" type="ionicon" color="red" />
            <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
              <Badge
                value="12"
                status="error"
                badgeStyle={{ position: "absolute", top: -3, right: -3 }}
              />
              <Icon reverse name="ios-cart" type="ionicon" color="#d1677a" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  card: {
    backgroundColor: "#222",
    margin: 30,
    padding: 20,
    shadowColor: "#ccc",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 30,
    borderRadius: 20,
    flex: 1,
  },
  button: {
    borderRadius: 25,
    backgroundColor: "#d1677a",
  },
  cardText: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
  },
  cardButton: {
    flex: 2,
    justifyContent: "space-between",
  },
  text: {
    color: "#ccc",
    fontSize: 22,
  },
  price: {
    color: "#ccc",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default CardAddItemToCart;
