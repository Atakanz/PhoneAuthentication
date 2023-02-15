import React from 'react';
import {SafeAreaView, Image, View, ImageBackground} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import styles from './login.style';
import EnterNumberSection from '../../components/enterNumber/enterNumber';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#777777" />
      <ImageBackground
        source={require('../../assets/background.jpg')}
        // Imagebackground view is choosed for messaging area.
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.enterNumberView}>
          <EnterNumberSection navigation={navigation} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Login;
