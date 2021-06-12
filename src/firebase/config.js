import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCEfWXj4bMfbVi5Nkcg3Mn0p2kVhqnfDX4',
  authDomain: 'gen17-user-app.firebaseapp.com',
  projectId: 'gen17-user-app',
  storageBucket: 'gen17-user-app.appspot.com',
  messagingSenderId: '309449524472',
  appId: '1:309449524472:web:63b96924b8d710267ca70d',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
