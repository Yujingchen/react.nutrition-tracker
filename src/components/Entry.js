import React, { Component } from "react";

class Entry extends Component {
  state = {
    entries: [
      {
        id: "1",
        name: "Potatoes",
        carb: "10",
        fat: "5",
        protein: "6",
        servings: 1.0
      },
      {
        id: "2",
        name: "Chicken",
        carb: "8",
        fat: "0.7",
        protein: "20",
        servings: 1.0
      }
    ]
  };

  render() {
    const { entries } = this.state;
    return (
      <div>
        <h1>
          <span className="danger"> Entry</span>List
        </h1>

        {entries.map(entry => {
          return (
            <div className="card card-body mb-3" key={entry.id}>
              <h4> {entry.name}</h4>
              <p> You had {entry.servings} servings</p>
              <ul className="list-group">
                <li className="list-group-item"> Fat: {entry.fat}g</li>
                <li className="list-group-item"> Carb: {entry.carb}g</li>
                <li className="list-group-item"> Protein: {entry.protein}g</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Entry;
