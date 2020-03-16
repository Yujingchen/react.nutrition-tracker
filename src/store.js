import { createStore, compose, combineReducers } from "redux";
import firebase from "firebase/app";
import "firebase/firestore";
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
  useFirestoreForProfile: true //Firestore for Profile instead of Realtime DB
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- firestoreneeded if using
});


//Create initial state
const initialState = {};
// create initialState with settings stored in localstorage that is parsed back to json fotmat
//Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;