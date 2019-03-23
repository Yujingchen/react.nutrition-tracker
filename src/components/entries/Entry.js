import React, { Component } from "react";
import PropTypes from "prop-types";
import { deleteEntry } from "../components/action/entryAction";
import { connect } from "react-redux";

class Entry extends Component {
  state = {
    showEntryInfo: false
  };

  showEntry = () => {
    this.setState({
      showEntryInfo: !this.state.showEntryInfo
    });
  };

  onDeleteClick = id => {
    this.props.deleteEntry(id);
    //fiex deleteEntry(id) not working
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
      <div>
        <div className="card card-body mb-3" key={id}>
          <h4>
            {name}
            <i
              onClick={this.showEntry}
              style={{ cursor: "pointer" }}
              className="fas fa-sort-down "
            />
            <i
              onClick={this.onDeleteClick.bind(this, id)}
              style={{ cursor: "pointer", float: "right" }}
              className="fas fa-trash-alt"
            />
          </h4>

          {showEntryInfo ? (
            <div>
              <p>
                {" "}
                You had <span className="bold-text-x">{servings}</span> servings
              </p>
              <p>
                Calories each serving:{" "}
                <span className="bold-text-x">{calories}</span>
              </p>
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
  }
}

Entry.propType = {
  entry: PropTypes.object.isRequired,
  deleteEntry: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEntry }
)(Entry);
