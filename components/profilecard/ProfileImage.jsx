import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const ProfileImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require("../../resources/images/profile-picture.jpeg")}
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
  // The imageContainer uses absolute positioning to overlap the top section of the card.
  imageContainer: {
    position: "absolute",
    top: "20%", // Adjust to control how much the image overlaps the background
    backgroundColor: "#FFF",
    borderRadius: 75,
    // Shadow for elevation effect on both platforms
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
});

export default ProfileImage;
