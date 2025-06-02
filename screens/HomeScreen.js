import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Alert, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IP } from "../App";

const Student = () => {
  const navigation = useNavigation();
  const [student, setstudent] = useState([]);

  const fetchstudent = async () => {
    const res = await fetch(`${IP}:3000/api/student`);
    const data = await res.json();
    setstudent(data);
  };

  const deletestudent = async (id) => {
    await fetch(`${IP}:3000/api/student/${id}`, { method: 'DELETE' });
    fetchstudent();
  };

  useEffect(() => {
    const unsub = navigation.addListener('focus', fetchstudent);
    return unsub;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.addcontan}>
        <Text style={styles.addtext} onPress={() => navigation.navigate("Add")}>+ Add</Text>
        <Text style={styles.pname}>Product List</Text>

        <FlatList
          data={student}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemcon}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.age}</Text>
              <Text style={styles.name}>{item.course}</Text>
              <View style={styles.edbtn}>
                <Text style={styles.editbtn} onPress={() => navigation.navigate('Update', item)}>EDIT</Text>
                
                <Text
                  style={styles.deletebtn}
                  onPress={() =>
                    Alert.alert("Delete student", "Are you sure you want to delete this student?", [
                      { text: 'Cancel' },
                      { text: 'OK', onPress: () => deletestudent(item.id) },
                    ])
                  }
                >
                  DELETE
                </Text>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/685/685391.png" }}
                style={styles.emptyImage}
                resizeMode="contain"
              />
              <Text style={styles.emptyText}>No products available</Text>
            </View>
          }
        />
      </View>

      <Button title="GO TO HomePage" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Student;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addcontan: {
    flex: 1,
    padding: 10,
  },
  addtext: {
    backgroundColor: "purple",
    padding: 10,
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  pname: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  itemcon: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  edbtn: {
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    marginTop: 18,
  },
  editbtn: {
    color: "white",
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: "darkslateblue",
    padding: 8,
    borderRadius: 5,
  },
  detailbtn: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "green",
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  deletebtn: {
    color: "white",
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  cartImage: {
    width: 24,
    height: 24,
    tintColor: 'black',
    marginBottom: 10,
  },
  cartIcon: {
    padding: 4,
    alignItems: 'flex-end',
  },
  acart: {
    color: '#fff',
    backgroundColor: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    width: 220,
    height: 35,
    borderRadius: 15,
    textAlign: 'center',
    paddingTop: 7,
    marginTop: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 90,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  wow: {
    flexDirection: 'row',
    gap: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    alignItems: "flex-end",
    marginTop: 5,
  },
});
