import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDNSP1cKphF9vOLFCZjb7fVKSDQ1SCsm0M',
  authDomain: 'jobapp-68dc1.firebaseapp.com',
  projectId: 'jobapp-68dc1',
  storageBucket: 'jobapp-68dc1.appspot.com',
  messagingSenderId: '82509193889',
  appId: '1:82509193889:web:f7181b90214dd87c7ac6e0',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
