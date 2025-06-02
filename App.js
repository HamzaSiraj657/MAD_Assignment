import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Student from "./screens/HomeScreen";
import Add from "./screens/Add";
import Update from "./screens/Update";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const App = () => {
    
    const Stack = createNativeStackNavigator();

    return (
       
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Student">
            
            <Stack.Screen name="Student" component={Student} />
            <Stack.Screen name="Add" component={Add} />
            <Stack.Screen name="Update" component={Update} />
            
            
          </Stack.Navigator>
        </NavigationContainer>
       
      );
    
}


export const IP = `http://192.168.100.85`;
export default App;