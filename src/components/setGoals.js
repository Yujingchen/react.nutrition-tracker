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
      this.setState({ errors: { goal: "Goal is required" } });
      return;
    } else if (isNaN(newGoal)) {
      this.setState({ errors: { goal: "Goal must be in number" } });
      return;
    }

    dispatch({ type: "ADD_GOAL", payload: newGoal });

    this.onCloseModal();
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false, newGoal: "", errors: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { open, newGoal, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <span id="redButton">
              <button className="btn btn-danger" onClick={this.onOpenModal}>
                Set goals
              </button>
              <Modal open={open} onClose={this.onCloseModal} little>
                <div className="card mb-3">
                  <div className="card-header">Goal</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <div className="form group">
                        <div className="input-group mb-3">
                          <input
                            id="modelInput"
                            name="newGoal"
                            placeholder="Enter your calories goal"
                            value={newGoal}
                            onChange={this.onChange}
                            className={classnames(
                              "form-control form-control-lg",
                              {
                                "is-invalid": errors.goal
                              }
                            )}
                          />

                          {errors.goal && (
                            <div className="invalid-feedback">
                              {errors.goal}
                            </div>
                          )}
                        </div>
                      </div>

                      <input
                        type="submit"
                        value="Add"
                        className="btn btn-block btn-light"
                      />
                    </form>
                  </div>
                </div>
              </Modal>
            </span>
          );
        }}
      </Consumer>
    );
  }
}

export default Setgoal;
