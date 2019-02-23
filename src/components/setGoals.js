import React, { Component } from "react";
import Modal from "react-responsive-modal";
import classnames from "classnames";
import { Consumer } from "./../Context";

class Setgoal extends Component {
  state = {
    open: false,
    newGoal: "",
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { newGoal } = this.state;

    if (newGoal === "") {
      this.setState({ errors: { goal: "Input goal is required" } });
      return;
    }

    dispatch({ type: "ADD_GOAL", payload: newGoal });
    this.onCloseModal();
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { open, newGoal, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <button
                className="btn btn-danger btn-block"
                onClick={this.onOpenModal}
              >
                Set your goals
              </button>
              <Modal open={open} onClose={this.onCloseModal} little>
                <h3>Goals:</h3>
                <div>
                  <input
                    type="number"
                    required
                    pattern="\d+"
                    name="newGoal"
                    placeholder="Enter your calories goal"
                    value={newGoal}
                    onChange={this.onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.goal
                    })}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                  <button
                    type="submit"
                    className="btn btn-block btn-light"
                    onClick={this.onSubmit.bind(this, dispatch)}
                  >
                    Add Goal
                  </button>
                </div>
              </Modal>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Setgoal;
