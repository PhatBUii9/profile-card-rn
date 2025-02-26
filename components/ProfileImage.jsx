import { View, Image, StyleSheet } from "react-native";

const ProfileImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require("../resources/images/profile-picture.jpeg")}
        style={styles.images}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  imageContainer: {
    position: "absolute",
    top: "20%",
    backgroundColor: "#FFF",
    borderRadius: 75,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, heightL: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
});

export default ProfileImage;
