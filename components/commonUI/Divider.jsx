import React from "react";
import { View, StyleSheet } from "react-native";

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 3,
    width: "100%",
    backgroundColor: "#dc143c",
    marginVertical: 8,
  },
});
