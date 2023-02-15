import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'xxxxxx',
  authDomain: 'xxxxxx',
  projectId: 'xxxxxx',
  storageBucket: 'xxxxxx',
  messagingSenderId: 'xxxxxx',
  appId: 'xxxxxx',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
