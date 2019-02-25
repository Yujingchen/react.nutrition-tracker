import React, { Component } from "react";
import classnames from "classnames";
class InputList extends Component {
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          name={this.props.name}
          placeholder={`Enter ${this.props.placeholder}`}
          value={this.props.value}
          onChange={this.props.change}
          className={classnames("form-control form-control-lg", {
            "is-invalid": this.props.errors
          })}
        />
        {this.props.unit ? (
          <div className="input-group-append">
            <span className="input-group-text">g</span>
          </div>
        ) : null}

        {this.props.errors && (
          <div className="invalid-feedback">{this.props.errors}</div>
        )}
      </React.Fragment>
    );
  }
}

export default InputList;
