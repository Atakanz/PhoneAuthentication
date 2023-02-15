import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {useFonts, Poppins_700Bold} from '@expo-google-fonts/poppins';
import styles from './loginButtons.style';

const LoginButtons = props => {
  const [loaded] = useFonts({
    Poppins_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.loginButtons} onPress={props.task}>
        <Text style={[styles.title, {fontFamily: 'Poppins_700Bold'}]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginButtons;
