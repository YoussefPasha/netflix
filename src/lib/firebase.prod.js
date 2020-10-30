import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDp1o4fsmQjB5b29LL6AobbAKb7siIrn0M',
  authDomain: 'netflixii.firebaseapp.com',
  databaseURL: 'https://netflixii.firebaseio.com',
  projectId: 'netflixii',
  storageBucket: 'netflixii.appspot.com',
  messagingSenderId: '171220196455',
  appId: '1:171220196455:web:33ea4f2471e78a35f1c8c2',
};
const firebase = Firebase.initializeApp(config);
// db on database
// seedDatabase(firebase);
export { firebase };
