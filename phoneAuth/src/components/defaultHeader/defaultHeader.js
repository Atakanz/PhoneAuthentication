import React from 'react';
import {SafeAreaView, Pressable, TouchableOpacity} from 'react-native';
import styles from './defaultHeader.style';
import {StatusBar} from 'expo-status-bar';

const DefaultHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="rgb(21, 94, 117)" style="light" />
    </SafeAreaView>
  );
};

export default DefaultHeader;
