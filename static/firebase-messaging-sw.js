importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js")
// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "716764804082",
})
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()