import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import firebase from "firebase";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTaT2esFnkzHjTrRd1tBuRKbJOEs0Yym0",
  authDomain: "caloriestracker-ab17f.firebaseapp.com",
  databaseURL: "https://caloriestracker-ab17f.firebaseio.com",
  projectId: "caloriestracker-ab17f",
  storageBucket: "caloriestracker-ab17f.appspot.com",
  messagingSenderId: "146026107623"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
// const firestore = firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
