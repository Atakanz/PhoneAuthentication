import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStack from './loginStack.js';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../management/features/user/userSlice.js';
import {BottomTab} from './bottomTab.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const getSavedItem = async () => {
    let userData = await AsyncStorage.getItem('savedUser');
    const _user = userData ? JSON.parse(userData) : null;
    dispatch(setUser(_user));
  };

  useEffect(() => {
    getSavedItem();
    // eslint-disable-next-line
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!user ? (
          <>
            <Stack.Screen name="LoginStack" component={LoginStack} />
          </>
        ) : (
          <>
            <Stack.Screen name="BottomTab" component={BottomTab} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
