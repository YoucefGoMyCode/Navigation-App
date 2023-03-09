import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Splash from './src/screens/Splash';
import ActionName from './src/redux/reducers/ActionName';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageKeys from './src/constants/AsyncStorageKeys';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  const isSplash = useSelector(state => state.AuthReducer.isSplash);
  const isLogin = useSelector(state => state.AuthReducer.isLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem(AsyncStorageKeys.isLogin)
      .then(value => {
        if (value) {
          dispatch({type: ActionName.connecte});
        }
      })
      .finally(() => {
        dispatch({type: ActionName.finishSplash});
      });
  }, []);

  return (
    <NavigationContainer>
      {isSplash ? (
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
      ) : isLogin ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Regitser" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
