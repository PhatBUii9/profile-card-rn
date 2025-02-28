import { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import Divider from "../commonUI/Divider";

const ProfileInfo = () => {
  const [profile, setProfile] = useState({
    profileName: "",
    occupation: "",
    description: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  function handleNameChange(text) {
    setProfile({
      ...profile,
      profileName: text,
    });
  }

  function handleOccupationChange(text) {
    setProfile({
      ...profile,
      occupation: text,
    });
  }

  function handleDescriptionChange(text) {
    setProfile({
      ...profile,
      description: text,
    });
  }

  if (isEdit) {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <TextInput
          style={[
            styles.text,
            styles.profileName,
            styles.inputField,
            { height: 60 },
          ]}
          onChangeText={handleNameChange}
          value={profile.profileName}
          placeholder="Name"
          maxLength={15}
          numberOfLines={2}
        />
        <TextInput
          style={[styles.text, styles.occupation, styles.inputField]}
          onChangeText={handleOccupationChange}
          value={profile.occupation}
          placeholder="Occupation"
          maxLength={20}
          multiline={false}
        />
        <Divider />
        <TextInput
          style={[styles.text, styles.description, styles.descriptionInput]}
          onChangeText={handleDescriptionChange}
          value={profile.description}
          placeholder="Description"
          maxLength={100}
          multiline={true}
          numberOfLines={3}
          textAlignVertical="top"
        />
        <Button title="Save" onPress={() => setIsEdit(!isEdit)} />
      </KeyboardAvoidingView>
    );
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={[styles.text, styles.profileName]} numberOfLines={2}>
        {profile.profileName || "Name"}
      </Text>
      <Text style={[styles.text, styles.occupation]}>
        {profile.occupation || "Occupation"}
      </Text>
      <Divider />
      <Text style={[styles.text, styles.description]}>
        {profile.description || "Description"}
      </Text>
      <Button title="Edit" onPress={() => setIsEdit(!isEdit)} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingBottom: 20, // optional additional space
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
  // Fixed height for single-line inputs to prevent expansion.
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 5,
  },
  // Fixed height for the multiline description field.
  descriptionInput: {
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 5,
  },
});

export default ProfileInfo;
