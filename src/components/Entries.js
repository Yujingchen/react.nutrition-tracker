import React, { Component } from "react";
import Entry from "./Entry";
import { Consumer } from "../Context";
import Calories from "./Calories";
class Entries extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { entries } = value;
          return (
            <div>
              <Calories />
              <h1 className="display-4 mb-2 text-center">
                Today's <span className="text-danger"> Entries</span>
              </h1>
              {entries.map(entry => {
                return <Entry key={entry.id} entry={entry} />;
              })}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Entries;
