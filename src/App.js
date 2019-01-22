import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Entries from "./components/Entries";
import Calories from "./components/Calories";
import { Provider } from "./Context";
import AddEntry from "./components/AddEntry";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
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
        </Provider>
      </Router>
    );
  }
}

export default App;
