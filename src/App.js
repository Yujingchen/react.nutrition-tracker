import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";

import Entries from "./components/Entries";
import Calories from "./components/Calories";

class App extends Component {
  render() {
    return (
      <div className="APP">
        <Header />

        <div className="container">
          <Calories />
          <Entries />
        </div>
      </div>
    );
  }
}

export default App;
