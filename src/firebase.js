import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: 'AIzaSyA77M1Bvkg_ctIhCPpEt-vq6mCQNxG5jWM',
  authDomain: 'auth-dev-new.firebaseapp.com',
  projectId: 'auth-dev-new',
  storageBucket: 'auth-dev-new.appspot.com',
  messagingSenderId: '393396700935',
  appId: '1:393396700935:web:d94d4222a0704997cb67a2',
});

export const auth = app.auth();
export default app;
