import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useFonts, Poppins_500Medium} from '@expo-google-fonts/poppins';
import styles from './enterDigitUnits.style';
import {useDispatch} from 'react-redux';
import LoginButtons from '../loginButtons/loginButtons';
import {verifyCode, sendVerification} from '../../utils/loginUtils';
import {logIn} from '../../management/features/user/userSlice';
import {firebaseConfig} from '../../../config';
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';

const EnterDigitUnits = ({id, phoneNumber}) => {
  // under section of the "kodunuzburada" text title  at "numbercheck" page
  const recaptchaVerifier = useRef(null);
  const [currentId, setCurrentId] = useState(null);
  const [timeDown, setTimeDown] = useState(60); // 60 s couunt down
  const timerRef = useRef(timeDown);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(interval);
      } else {
        setTimeDown(timerRef.current);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');

  const buttonTask = () => {
    // works only in the time gap
    if (timeDown > 0) {
      verifyCode({
        pin1,
        pin2,
        pin3,
        pin4,
        pin5,
        pin6,
        id: currentId === null ? id : currentId,
      })
        .then(res => {
          dispatch(logIn({phoneNumber: res.user.phoneNumber}));
          // user is determined for navigating to app automaticly (in mainStack.js)
        })
        .catch(error => {
          //show an alert in case of error
          alert(error);
        });
    } else {
      Alert.alert('Timed out waiting for response');
    }
  };

  const reSendCode = () => {
    // after time is up, reSend button can work
    if (timeDown === 0) {
      sendVerification({
        phoneNumber,
        recaptchaCurrent: recaptchaVerifier.current,
      }).then(res => {
        setCurrentId(res);
        setTimeDown(60);
        setPin1('');
        setPin2('');
        setPin3('');
        setPin4('');
        setPin5('');
        setPin6('');
      });
    }
  };

  // Text-inputs ref for focusing to next automaticly for userfriendliness
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <View style={styles.textInputView}>
        <TextInput
          ref={ref1}
          maxLength={1}
          keyboardType={'number-pad'}
          value={pin1}
          onChangeText={setPin1}
          style={styles.input}
          textAlign={'center'}
          onChange={pin1 => {
            setPin1(pin1);
            if (pin1 != '') {
              ref2.current.focus();
            }
            // if input is filled, then focus to next input
          }}
        />
      </View>
      <View style={styles.textInputView}>
        <TextInput
          ref={ref2}
          maxLength={1}
          keyboardType={'number-pad'}
          value={pin2}
          onChangeText={setPin2}
          style={styles.input}
          textAlign={'center'}
          onChange={pin2 => {
            setPin2(pin2);
            if (pin2 != '') {
              ref3.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.textInputView}>
        <TextInput
          ref={ref3}
          maxLength={1}
          keyboardType={'number-pad'}
          value={pin3}
          onChangeText={setPin3}
          style={styles.input}
          textAlign={'center'}
          onChange={pin3 => {
            setPin3(pin3);
            if (pin3 != '') {
              ref4.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.textInputView}>
        <TextInput
          ref={ref4}
          maxLength={1}
          keyboardType={'number-pad'}
          value={pin4}
          onChangeText={setPin4}
          style={styles.input}
          textAlign={'center'}
          onChange={pin4 => {
            setPin4(pin4);
            if (pin4 != '') {
              ref5.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.textInputView}>
        <TextInput
          ref={ref5}
          maxLength={1}
          keyboardType={'number-pad'}
          value={pin5}
          onChangeText={setPin5}
          style={styles.input}
          textAlign={'center'}
          onChange={pin5 => {
            setPin5(pin5);
            if (pin5 != '') {
              ref6.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.textInputView}>
        <TextInput
          ref={ref6}
          maxLength={1}
          keyboardType={'number-pad'}
          value={pin6}
          onChangeText={setPin6}
          style={styles.input}
          textAlign={'center'}
          onChange={pin6 => {
            setPin6(pin6);
          }}
        />
      </View>
      <View style={styles.options}>
        <Text style={[styles.timeDownText, {fontFamily: 'Poppins_500Medium'}]}>
          {timeDown} seconds
        </Text>
        <TouchableOpacity onPress={reSendCode}>
          <Text style={[styles.reSendText, {fontFamily: 'Poppins_500Medium'}]}>
            Resend code
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <LoginButtons title="VERIFY CODE" task={buttonTask} />
      </View>
    </SafeAreaView>
  );
};
export default EnterDigitUnits;
