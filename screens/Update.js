import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IP } from "../App";

const Update = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, name: initname, age: initage, course: initcourse } = route.params;

  const [name, setname] = useState(initname);
  const [age, setage] = useState(initage.toString());
  const [course, setcourse] = useState(initcourse);

  const Updatestudent = async () => {
    if (!name || !age || !course) {
      Alert.alert("All fields are required");
      return;
    }

    try {
      const res = await fetch(`${IP}:3000/api/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          course,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update");
      }

      Alert.alert("Student updated");
      navigation.goBack();
    } catch (err) {
      Alert.alert("Update failed", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addcon}>
        <TextInput
          style={styles.addtext}
          placeholder="Student Name"
          value={name}
          onChangeText={setname}
        />
        <TextInput
          style={styles.addtext}
          placeholder="Student Age"
          keyboardType="numeric"
          value={age}
          onChangeText={setage}
        />
        <TextInput
          style={[styles.addtext, styles.textarea]}
          placeholder="Student Course"
          value={course}
          onChangeText={setcourse}
        />
        <Button title="Update Student" onPress={Updatestudent} />
      </View>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addcon: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  addtext: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
});
