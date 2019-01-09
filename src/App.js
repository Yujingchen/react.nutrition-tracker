import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Entry from "./components/Entry.js";
class App extends Component {
  render() {
    return (
      <div className="APP">
        <Header />

        <div className="container">
          <Entry />
        </div>
      </div>
    );
  }
}

export default App;
