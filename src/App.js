import React, { Component } from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/View/Dashboard";
import NotFound from "./components/View/NotFound"
import firebase from "firebase/app"
import "./styles/main.scss"
import './styles/share.scss';
import "./store";



class App extends Component {
  render() {
    firebase.auth().signInWithEmailAndPassword("test@test.com", "testtest").catch(function (error) {
      console.log("login not success")
    });
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user signed in ")
      } else {
        console.log("no user signed in")
      }
    });

    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/404" component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;