import React from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderStyle: "dashed",
    borderTopColor: "#222",
    backgroundColor: "#222",
    width: "80%",
    marginLeft: "10%",
    marginTop: 30,
    borderRadius: 90,
    fontFamily: "Roboto",
  },
  price: {
    borderColor: "#222",
    backgroundColor: "#222",
    height: 160,
    width: "80%",
    marginLeft: "10%",
    borderRadius: 40,
    shadowColor: "#222",
    elevation: 60,
    shadowRadius: 6,
    shadowOpacity: 0.8,
    shadowOffset: { height: 5, width: 0 },
  },
  fontPrice: {
    color: "#ccc",
    fontFamily: "Roboto",
    marginLeft: "15%",
  },
  fontPrice2: {
    color: "#c4c4c4",
    fontFamily: "Roboto",
    marginTop: "15%",
    marginLeft: "20%",
  },
  pagar: {
    width: 150,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#d1677a",
    marginLeft: "33%",
    marginTop: "20%",
    shadowColor: "#111",
    elevation: 60,
    shadowRadius: 6,
    shadowOpacity: 0.8,
    shadowOffset: { height: 5, width: 0 },
  },
  textPagar: {
    fontFamily: "Roboto",
    color: "#fff",
    fontSize: 25,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
});
export default styles;
