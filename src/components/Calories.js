import React, { Component } from "react";

class Calories extends Component {
  state = {
    fat: "34.4",
    carb: "274.4",
    protein: "99.4"
  };
  render() {
    const { fat, carb, protein } = this.state;
    return (
      <div>
        <div className="card card-body mb-3">
          <h3 className="text-center mb-3">Calories:1650/2048 </h3>
          <ul className="list-group">
            <li className="list-group-item">Fats: {fat}g</li>
            <li className="list-group-item">carb: {carb}g</li>
            <li className="list-group-item">Protein: {protein}g</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Calories;
