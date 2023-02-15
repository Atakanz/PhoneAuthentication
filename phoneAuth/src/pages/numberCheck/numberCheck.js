import React from 'react';
import {SafeAreaView, ImageBackground, Image, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import styles from './numberCheck.style';
import EnterCodeSection from '../../components/enterCode/enterCode';

const NumberCheck = ({route}) => {
  const id = route.params.res;
  const phoneNumber = route.params.phoneNumber;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#777777" />
      <ImageBackground
        source={require('../../assets/background.jpg')}
        // Imagebackground view is choosed for messaging area.
        resizeMode="cover"
        style={styles.image}>
        <EnterCodeSection id={id} phoneNumber={phoneNumber} />
      </ImageBackground>
    </SafeAreaView>
  );
};
export default NumberCheck;
