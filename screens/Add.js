import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";


import { IP } from "../App";



const Add = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [Course, setCourse] = useState('');
  const [age, setAge] = useState('');
 
  

  const Addstudent = async () => {
  try {
    await fetch(`${IP}:3000/api/student`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, course: Course }),
    });
    Alert.alert('Student added');
    navigation.goBack();
  } catch (error) {
    Alert.alert('Error', 'Failed to add student');
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
          placeholder="Student age"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={[styles.addtext, styles.textarea]}
          placeholder="Student Course"
          value={Course}
          onChangeText={setCourse}
        />
        
        <Button title="Add Product" onPress={Addstudent} />
      </View>
      
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: { flex: 1 },
  addcon: { flex: 1, padding: 20, gap: 10 },
  addtext: { borderWidth: 1, borderColor: "lightgrey" },
  textarea: { height: 100 },
});
