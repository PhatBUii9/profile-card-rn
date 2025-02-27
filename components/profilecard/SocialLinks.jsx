import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SocialLinks = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="instagram" size={24} color="#D32F2F" />
      <FontAwesome name="twitter" size={24} color="#D32F2F" />
      <FontAwesome name="facebook" size={24} color="#D32F2F" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginTop: 20,
  },
});

export default SocialLinks;
