import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import ActionName from '../redux/reducers/ActionName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageKeys from '../constants/AsyncStorageKeys';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: ActionName.disconnect});
          AsyncStorage.removeItem(AsyncStorageKeys.isLogin);
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text>Go to profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
