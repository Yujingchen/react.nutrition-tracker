import React, { Component } from "react";
import { Consumer } from "./../Context";
import Setgoals from "./setGoals";
class Calories extends Component {
  state = {
    fat: "34.4",
    carb: "274.4",
    protein: "99.4"
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { entries, targetCalories } = value;
          const calculateTotalFat = entries.reduce(
            (totalFat, entry) => totalFat + entry.fat * entry.servings,
            0
          );

          const calculateTotalCarbs = entries.reduce(
            (totalCarbs, entry) => totalCarbs + entry.carb * entry.servings,
            0
          );
          const calculateTotalProtein = entries.reduce(
            (totalProtein, entry) =>
              totalProtein + entry.protein * entry.servings,
            0
          );

          const calculateTotalCalories = entries.reduce(
            (totalCalories, entry) =>
              totalCalories + entry.calories * entry.servings,
            0
          );
          return (
            <div>
              {console.log(calculateTotalProtein)}
              <div className="card card-body mb-3">
                <h3 className="text-center mb-3">
                  Calories:{calculateTotalCalories}/{targetCalories}
                </h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    Fats: {calculateTotalFat}g
                  </li>
                  <li className="list-group-item">
                    carb: {calculateTotalCarbs}g
                  </li>
                  <li className="list-group-item">
                    Protein: {calculateTotalProtein}g
                  </li>
                </ul>
                {/* <button className="btn btn-danger">Set goals</button> */}
                <Setgoals />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Calories;
