import firebase from 'firebase/compat/app';
import {PhoneInfoOptions} from 'firebase/auth';

export const sendVerification = async ({phoneNumber, recaptchaCurrent}) => {
  const verificationId =
    await new firebase.auth.PhoneAuthProvider().verifyPhoneNumber(
      phoneNumber,
      recaptchaCurrent,
    );
  console.log('res', verificationId);
  return verificationId;
};

export const verifyCode = async ({pin1, pin2, pin3, pin4, pin5, pin6, id}) => {
  if (
    pin1 != '' &&
    pin2 != '' &&
    pin3 != '' &&
    pin4 != '' &&
    pin5 != '' &&
    pin6 != ''
  ) {
    const code = pin1 + pin2 + pin3 + pin4 + pin5 + pin6;
    const credential = firebase.auth.PhoneAuthProvider.credential(id, code);
    let result = await firebase.auth().signInWithCredential(credential);
    return result;
  }
};
