import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import styles from './campaigns.style';
import {useDispatch} from 'react-redux';
import firebase from 'firebase/compat/app';
import {getAuth, signOut} from 'firebase/auth';
import {logOut} from '../../management/features/user/userSlice';
import LoginButtons from '../../components/loginButtons/loginButtons';

const Campaigns = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut(null));
      })
      .catch(error => {
        // An error happened.
      });
  };
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LoginButtons task={logout} title="LOG OUT" />
    </SafeAreaView>
  );
};
export default Campaigns;
