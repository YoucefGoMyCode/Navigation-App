import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import ActionName from '../redux/reducers/ActionName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageKeys from '../constants/AsyncStorageKeys';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: ActionName.connecte});
          AsyncStorage.setItem(AsyncStorageKeys.isLogin, 'yes');
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
