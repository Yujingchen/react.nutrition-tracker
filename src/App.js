import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";

import Entries from "./components/Entries";
import Calories from "./components/Calories";
import { Provider } from "./Context";
import AddEntry from "./components/AddEntry";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="APP">
          <Header />

          <div className="container">
            <AddEntry />
            <Calories />
            <Entries />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
