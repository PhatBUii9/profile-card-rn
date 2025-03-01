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
import EditIcon from "../commonUI/EditIcon";

const ProfileInfo = () => {
  // Profile state containing all profile fields
  const [profile, setProfile] = useState({
    profileName: "Name",
    occupation: "Occupation",
    description: "Description",
  });

  // Edit modes for each field
  const [editModes, setEditModes] = useState({
    profileName: false,
    occupation: false,
    description: false,
  });

  const isEdit =
    editModes.profileName || editModes.occupation || editModes.description;

  // Toggle the edit mode for a given field
  const toggleEdit = (field) => {
    setEditModes((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Update the profile field value
  const updateField = (field, text) => {
    setProfile((prev) => ({ ...prev, [field]: text }));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Name Field */}
      <View style={styles.fieldContainer}>
        {editModes.profileName ? (
          <TextInput
            style={[styles.text, styles.profileName, styles.inputField]}
            onChangeText={(text) => updateField("profileName", text)}
            value={profile.profileName}
            placeholder="Name"
            maxLength={20}
          />
        ) : (
          <Text style={[styles.text, styles.profileName]} numberOfLines={2}>
            {profile.profileName}
          </Text>
        )}
        {!isEdit && (
          <View style={styles.iconContainer}>
            <EditIcon onPress={() => toggleEdit("profileName")} />
          </View>
        )}
      </View>

      {/* Occupation Field */}
      <View style={styles.fieldContainer}>
        {editModes.occupation ? (
          <TextInput
            style={[styles.text, styles.occupation, styles.inputField]}
            onChangeText={(text) => updateField("occupation", text)}
            value={profile.occupation}
            placeholder="Occupation"
            maxLength={20}
          />
        ) : (
          <Text style={[styles.text, styles.occupation]}>
            {profile.occupation}
          </Text>
        )}
        {!isEdit && (
          <View style={styles.iconContainer}>
            <EditIcon onPress={() => toggleEdit("occupation")} />
          </View>
        )}
      </View>

      <Divider />

      {/* Description Field */}
      <View style={styles.fieldContainer}>
        {editModes.description ? (
          <TextInput
            style={[
              styles.text,
              styles.description,
              styles.inputField,
              styles.descriptionInput,
            ]}
            onChangeText={(text) => updateField("description", text)}
            value={profile.description}
            placeholder="Description"
            maxLength={100}
            multiline={true}
            numberOfLines={3}
            textAlignVertical="top"
          />
        ) : (
          <Text style={[styles.text, styles.description]}>
            {profile.description}
          </Text>
        )}
        {!isEdit && (
          <View style={styles.iconContainer}>
            <EditIcon onPress={() => toggleEdit("description")} />
          </View>
        )}
      </View>

      {/* Global Save Button (Optional) */}
      {(editModes.profileName ||
        editModes.occupation ||
        editModes.description) && (
        <Button
          title="Save"
          onPress={() =>
            setEditModes({
              profileName: false,
              occupation: false,
              description: false,
            })
          }
        />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",
    alignItems: "center",
    marginTop: 60,
    paddingBottom: 20,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  text: {
    flex: 1,
    marginVertical: 5,
    textAlign: "center",
  },
  profileName: {
    fontSize: 35,
    fontWeight: "bold",
  },
  occupation: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
  },
  inputField: {
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 5,
  },
  descriptionInput: {
    height: 60,
  },
  iconContainer: {
    marginLeft: 10, // Add some space to the left of the icon
  },
});

export default ProfileInfo;
