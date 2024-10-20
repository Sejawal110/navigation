// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './Components/LoginForm';
import HomeScreen from './Components/HomeScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginForm'>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name='Home' component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;