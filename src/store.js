import { createStore, compose, combineReducers } from "redux";
import firebase from "firebase";
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
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
const firestore = firebase.firestore(); // <- needed if using firestore
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
let store
if (window.navigator.userAgent.includes('Chrome')) {
  store = createStoreWithFirebase(
    rootReducer,
    initialState,
    compose(
      reactReduxFirebase(firebase),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStoreWithFirebase(
    rootReducer,
    initialState,
    compose(
      reactReduxFirebase(firebase),
    )
  );
}

//bug: react-redux v6 a v3.*.* version of react-redux-firebase is required
//fix npm i --save react-redux-firebase@latest or npm i --save react-redux@^5.0.0

export default store;