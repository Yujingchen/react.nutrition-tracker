import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./components/Layout/MainLayout/MainLayout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/View/Home";
import AddEntry from "./components/entries/AddEntry";
import NotFound from "./components/Layout/NotFound";
import store from "./store";
import { Provider } from "react-redux";
import "./styles/main.scss"
import './styles/share.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/entry/add" component={AddEntry} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </Router>
      </Provider>
    );
  }
}

export default App;
