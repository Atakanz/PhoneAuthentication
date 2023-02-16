import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'xxxx',
  authDomain: 'xxxx',
  projectId: 'xxxx',
  storageBucket: 'xxxx',
  messagingSenderId: 'xxxx',
  appId: 'xxxx',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
