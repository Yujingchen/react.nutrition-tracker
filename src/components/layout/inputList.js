import React, { Component } from "react";
import classnames from "classnames";
class InputList extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          name={this.props.name}
          placeholder={`Entry ${this.props.name}`}
          value={this.props.value}
          onChange={this.props.change}
          className={classnames("form-control form-control-lg", {
            "is-invalid": this.props.errors
          })}
        />
        {this.props.errors && (
          <div className="invalid-feedback">{this.props.errors}</div>
        )}
      </div>
    );
  }
}

export default InputList;
