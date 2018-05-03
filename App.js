import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import { Platform } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ENV_FIREBASE from './env.firebase.json';

// eslint-disable-next-line
require("firebase/firestore");

const config = {
  apiKey: ENV_FIREBASE.FIREBASE_API_KEY,
  authDomain: ENV_FIREBASE.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV_FIREBASE.FIREBASE_DB_URL,
  projectId: ENV_FIREBASE.FIREBASE_PRJ_ID,
  storageBucket: ENV_FIREBASE.FIREBASE_STORAGE,
  messagingSenderId: ENV_FIREBASE.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = StackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  MemoCreate: { screen: MemoCreateScreen },
}, {
  navigationOptions: {
    headerTitle: 'Memott',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#265366',
      ...Platform.select({
        android: {
          height: 80,
          paddingTop: 20,
        },
      }),
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
