import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const Register = ({route}) => {
  const text = route.params.contenu;
  return (
    <SafeAreaView>
      <Text>Register {text}</Text>
    </SafeAreaView>
  );
};

export default Register;
