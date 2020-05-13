import React, { Component } from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/View/Home";
// import NotFound from "./components/Layout/NotFound";
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
              {/* <Route component={NotFound} /> */}
            </Switch>
          </MainLayout>
        </Router>
      </Provider>
    );
  }
}

export default App;
