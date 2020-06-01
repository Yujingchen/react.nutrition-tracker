import React, { Component } from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/View/Dashboard";
import firebase from "firebase/app"
import "./styles/main.scss"
import './styles/share.scss';
import "./store";



class App extends Component {
  render() {
    firebase.auth().signInWithEmailAndPassword("test@test.com", "testtest").catch(function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      console.log("login not success")
      // ...
    });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user signed in ")
      } else {
        console.log("no user signed in")
        // No user is signed in.
      }
    });


    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;