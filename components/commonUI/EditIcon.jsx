import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const EditIcon = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <FontAwesome name="edit" size={24} color="black" />
    </Pressable>
  );
};

export default EditIcon;
