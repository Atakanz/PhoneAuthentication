import React, {useState, useRef} from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import styles from './enterNumber.style';
import LoginButtons from '../loginButtons/loginButtons';
import {useNavigation} from '@react-navigation/native';
import {sendVerification} from '../../utils/loginUtils';
import {firebaseConfig} from '../../../config';
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';

const EnterNumberSection = () => {
  const recaptchaVerifier = useRef(null);
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [loaded] = useFonts({
    Poppins_500Medium,
    Poppins_800ExtraBold,
  });

  if (!loaded) {
    return null;
  }

  const buttonTask = () => {
    // functions coming from loginUtils.js
    sendVerification({
      phoneNumber,
      recaptchaCurrent: recaptchaVerifier.current,
    }).then(res => {
      navigation.navigate('NumberCheck', {res, phoneNumber});
      // res-phone number information goes to numberCheck as route.params
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={[styles.sectionTitle, {fontFamily: 'Poppins_800ExtraBold'}]}>
        LOGIN
      </Text>
      <View style={styles.sectionBottomView}>
        <Text
          style={{
            fontFamily: 'Poppins_500Medium',
            fontSize: 13,
            color: 'white',
          }}>
          Telephone Number
        </Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          value={phoneNumber}
          keyboardType={'phone-pad'}
          onChangeText={setPhoneNumber}
          placeholder="(5XX) XXX XX XX"
          autoComplete="tel"
        />
      </View>
      <View style={styles.buttonView}>
        <LoginButtons title="SEND VERIFICATION CODE" task={buttonTask} />
      </View>
    </SafeAreaView>
  );
};
export default EnterNumberSection;
