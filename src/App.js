import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entries from "./components/entries/Entries";
import AddEntry from "./components/entries/AddEntry";
import NotFound from "./components/layout/NotFound";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="APP">
            <Header />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Entries} />
                <Route exact path="/entry/add" component={AddEntry} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
