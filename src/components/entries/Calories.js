import React, { Component } from "react";
import Setgoals from "./setGoals";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Calories extends Component {
  // state = {
  //   fat: "34.4",
  //   carb: "274.4",
  //   protein: "99.4"
  // };

  render() {
    const { entries, goal } = this.props;
    let calculateTotalFat, calculateTotalCarbs, calculateTotalProtein, calculateTotalCalories
    if (goal) {
      calculateTotalFat = entries.reduce(
        (totalFat, entry) => totalFat + entry.fat * entry.servings,
        0
      );

      calculateTotalCarbs = entries.reduce(
        (totalCarbs, entry) => totalCarbs + entry.carb * entry.servings,
        0
      );
      calculateTotalProtein = entries.reduce(
        (totalProtein, entry) => totalProtein + entry.protein * entry.servings,
        0
      );

      calculateTotalCalories = entries.reduce(
        (totalCalories, entry) => totalCalories + entry.calories * entry.servings,
        0
      );


      return (
        <div>
          <div className="card card-body mb-3">
            <div className="row-header">
              <h3 className="text-center mb-3">
                Calories:
              {calculateTotalCalories > goal.calories && goal.calories !== 0 ? (
                  <span style={{ color: "red" }}>
                    {" " + calculateTotalCalories}
                  </span>
                ) : (
                    <span>{" " + calculateTotalCalories}</span>
                  )}
                / {goal.calories}
              </h3>
              <span id="caloriesGoal">
                <Setgoals />
              </span>
            </div>
            <ul className="list-group">
              <li className="list-group-item bold ">
                Fats:
              {calculateTotalFat > goal.fat && goal.fat !== 0 ? (
                  <span style={{ color: "red" }}>{" " + calculateTotalFat}</span>
                ) : (
                    <span>{" " + calculateTotalFat}</span>
                  )}
                /{goal.fat}g
              <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{
                      width: `${(calculateTotalFat / goal.fat) * 100}%`
                    }}
                    aria-valuenow={(calculateTotalFat / goal.fat) * 100}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </li>
              <li className="list-group-item bold ">
                Carb:
              {calculateTotalCarbs > goal.carbs && goal.carbs !== 0 ? (
                  <span style={{ color: "red" }}>
                    {" " + calculateTotalCarbs}
                  </span>
                ) : (
                    <span>{" " + calculateTotalCarbs}</span>
                  )}
                /{goal.carbs}g
              <div className="progress ">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{
                      width: `${(calculateTotalCarbs / goal.carbs) * 100}%`
                    }}
                    aria-valuenow={(calculateTotalCarbs / goal.carbs) * 100}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </li>
              <li className="list-group-item bold ">
                Protein:
              {calculateTotalProtein > goal.protein && goal.protein !== 0 ? (
                  <span style={{ color: "red" }}>
                    {" " + calculateTotalProtein}
                  </span>
                ) : (
                    <span>{" " + calculateTotalProtein}</span>
                  )}
                /{goal.protein}g
              <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{
                      width: `${(calculateTotalProtein / goal.protein) * 100}%`
                    }}
                    aria-valuenow={(calculateTotalProtein / goal.protein) * 100}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return (null)
  }
}

Calories.propTypes = {
  firestore: PropTypes.object.isRequired
};

// const mapStateToProp = state => ({
//   entries: state.entryList.entries,
//   goal: state.entryList.goal
// });

export default compose(
  firestoreConnect([{ collection: "goal" }, { collection: "entries" }]),
  connect((state, props) => ({
    goal: state.firestore.ordered.goal,
    entries: state.firestore.ordered.entries
  }))
)(Calories);
