import React, { Component } from "react";

class Entry extends Component {
  render() {
    const { id, fat, name, carb, protein, servings } = this.props.entry;
    return (
      <div>
        <div className="card card-body mb-3" key={id}>
          <h4> {name}</h4>
          <p> You had {servings} servings</p>
          <ul className="list-group">
            <li className="list-group-item"> Fat: {fat}g</li>
            <li className="list-group-item"> Carb: {carb}g</li>
            <li className="list-group-item"> Protein: {protein}g</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Entry;
