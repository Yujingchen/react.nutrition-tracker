import React, { Component } from "react";
import Entry from "./Entry";

class Entries extends Component {
  state = {
    entries: [
      {
        id: "1",
        name: "Potatoes",
        carb: "10",
        fat: "5",
        protein: "6",
        servings: "1.0",
        calories: "200"
      },
      {
        id: "2",
        name: "Chicken",
        carb: "8",
        fat: "0.7",
        protein: "20",
        servings: "1.0",
        calories: "300"
      }
    ]
  };

  render() {
    const { entries } = this.state;
    return (
      <div>
        <h1 className="display-4 mb-2 text-center">
          Today's <span className="text-danger"> Entries</span>
        </h1>
        {entries.map(entry => {
          return <Entry key={entry.id} entry={entry} />;
        })}
      </div>
    );
  }
}

export default Entries;
