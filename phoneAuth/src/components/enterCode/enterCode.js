import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useFonts, Poppins_500Medium} from '@expo-google-fonts/poppins';
import styles from './enterCode.style';
import EnterDigitUnits from '../enterDigitUnits/enterDigitUnits';

const EnterCodeSection = ({id, phoneNumber}) => {
  const [loaded] = useFonts({
    Poppins_500Medium,
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionBottomView}>
        <Text
          style={{
            fontFamily: 'Poppins_500Medium',
            fontSize: 13,
            color: 'white',
          }}>
          Your code
        </Text>
      </View>
      <View style={styles.digitUnitsSection}>
        <EnterDigitUnits id={id} phoneNumber={phoneNumber} />
      </View>
    </SafeAreaView>
  );
};
export default EnterCodeSection;
