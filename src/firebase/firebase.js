import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCBxo7yicbeL0RqHU4Smi8HzS24QwROWbY',
  authDomain: 'expensify-78e2b.firebaseapp.com',
  databaseURL: 'https://expensify-78e2b.firebaseio.com',
  projectId: 'expensify-78e2b',
  storageBucket: 'expensify-78e2b.appspot.com',
  messagingSenderId: '609587326858',
  appId: '1:609587326858:web:b7049e061134f3e0'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().on('value', snapshot => {
  console.log(snapshot.val());
});

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
