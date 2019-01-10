import React, { Component } from "react";
import { Consumer } from "../Context";
import PropTypes from "prop-types";
class Entry extends Component {
  state = {
    showEntryInfo: false
  };

  showEntry = () => {
    this.setState({
      showEntryInfo: !this.state.showEntryInfo
    });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_ENTRY", payload: id });
  };

  render() {
    const {
      id,
      fat,
      name,
      carb,
      protein,
      servings,
      calories
    } = this.props.entry;
    const { showEntryInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card card-body mb-3" key={id}>
                <h4>
                  {" "}
                  {name}
                  <i
                    onClick={this.showEntry}
                    style={{ cursor: "pointer" }}
                    className="fas fa-sort-down "
                  />
                  <i
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                    style={{ cursor: "pointer", float: "right" }}
                    className="fas fa-trash-alt"
                  />
                </h4>

                {showEntryInfo ? (
                  <div>
                    <p> You had {servings} servings</p>
                    <p>Calories: {calories}</p>
                    <ul className="list-group">
                      <li className="list-group-item"> Fat: {fat}g</li>
                      <li className="list-group-item"> Carb: {carb}g</li>
                      <li className="list-group-item"> Protein: {protein}g</li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Entry.protoType = {
  entry: PropTypes.object.isRequired
};

export default Entry;
