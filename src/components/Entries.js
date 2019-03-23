import React, { Component } from "react";
import Entry from "./Entry";
import Calories from "./Calories";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Entries extends Component {
  render() {
    const { entries } = this.props;
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
  }
}

const mapStateToProps = state => ({
  entries: state.entryList.entries
});

Entries.propTypes = {
  entries: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Entries);
