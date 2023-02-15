import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/login/login';
import NumberCheck from '../pages/numberCheck/numberCheck';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NumberCheck" component={NumberCheck} />
    </Stack.Navigator>
  );
};

export default LoginStack;
