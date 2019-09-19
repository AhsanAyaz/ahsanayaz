import firebase from 'firebase/app';
import 'firebase/messaging';
import {FIREBASE_CONFIG} from '../constants/firebase-config';
import {postData} from '../utils/post-data';

export const initializeFirebase = () => {
  firebase.initializeApp(FIREBASE_CONFIG);
  typeof window !== 'undefined' && askForPermissioToReceiveNotifications();
}

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    getMessagingToken(messaging);
  } catch (error) {
    console.error(error);
  }
}

export const getMessagingToken = async (messaging = firebase.messaging) => {
  try {
    const currentToken = await messaging.getToken();
    if (currentToken) {
      const resp = await postData('https://ahsanayazweb-push.herokuapp.com/subscribe', {
        token: currentToken
      });
    } else {
      // Show permission request.
      console.info('No Instance ID token available. Request permission to generate one.');
    }
  } catch (err) {
    console.error('An error occurred while retrieving token. ', err);
  }
  
}