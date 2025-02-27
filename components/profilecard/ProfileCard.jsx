import { View, StyleSheet } from "react-native";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import SocialLinks from "./SocialLinks";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9; // 90% of the screen width
const CARD_HEIGHT = height * 0.6; // 60% of the screen height

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <LinearGradient
          colors={["#dc143c", "#b71c1c"]}
          style={styles.backgroundImage}
        />
        <ProfileImage />
        <ProfileInfo />
        <SocialLinks />
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#fff",
    borderRadius: 30,
    overflow: "hidden",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  backgroundImage: {
    height: "38%",
    width: "100%",
    backgroundColor: "#dc143c",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});

export default ProfileCard;
