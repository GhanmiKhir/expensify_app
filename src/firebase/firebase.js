import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref().on('value', snapshot => {
//   console.log(snapshot.val());
// });

// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Ghanmi Khir',
//     age: 24,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'google'
//     },
//     location: {
//       city: 'Sfax',
//       country: 'Tunisia'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(error => {
//     console.log('This failed.', error);
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Removed data');
//   })
//   .catch(e => {
//     console.log(e);
//   });

// database.ref().update({
//   strassLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
