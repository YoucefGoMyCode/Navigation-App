import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Splash from './src/screens/Splash';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
      {/*<Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Regitser" component={Register} />
      </Stack.Navigator>*/}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
