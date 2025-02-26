import { View, Text, Image, StyleSheet } from "react-native";
import Divider from "./commonUI/Divider";

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.profileName]}>Frank Bui</Text>
      <Text style={[styles.text, styles.occupation]}>Software Developer</Text>
      <Divider />
      <Text style={[styles.text, styles.description]}>
        I choose the software developer track because I love solving real world
        problems using logic thinking.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  text: {
    marginVertical: 5,
    textAlign: "center",
  },
  profileName: {
    fontSize: 40,
    fontWeight: "bold",
  },
  occupation: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
  },
});

export default ProfileInfo;
