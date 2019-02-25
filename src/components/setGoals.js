import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { Consumer } from "./../Context";
import classnames from "classnames";

class Setgoal extends Component {
  state = {
    open: false,
    errors: {},
    perFat: "",
    perCarbs: "",
    perProtein: ""
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { perFat, perCarbs, perProtein } = this.state;
    if (perFat === "") {
      this.setState({ errors: { perFat: "Input value is required" } });
      return;
    } else if (isNaN(perFat)) {
      this.setState({ errors: { perFat: "Fat must be number" } });
      return;
    }
    if (perCarbs === "") {
      this.setState({ errors: { perCarbs: "Input value is required" } });
      return;
    } else if (isNaN(perCarbs)) {
      this.setState({ errors: { perCarbs: "Carbs must be number" } });
      return;
    }
    if (perProtein === "") {
      this.setState({ errors: { perProtein: "Input value is required" } });
      return;
    } else if (isNaN(perProtein)) {
      this.setState({ errors: { perProtein: "Protein must be number" } });
      return;
    }

    const calories =
      (Number(perFat) + Number(perCarbs)) * 4 + Number(perProtein) * 9;
    const newGoal = {
      fat: perFat,
      carbs: perCarbs,
      protein: perProtein,
      calories
    };
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
    const { open, perFat, perCarbs, perProtein, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <span id="redButton">
              <button className="btn btn-danger" onClick={this.onOpenModal}>
                Add goal
              </button>
              <Modal open={open} onClose={this.onCloseModal} little>
                <div className="card mb-3">
                  <div className="card-header">Goal</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <div className="form group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="prepend">
                              Fat:
                            </span>
                          </div>
                          <input
                            id="modelInput"
                            type="text"
                            name="perFat"
                            placeholder="Enter fat"
                            value={perFat}
                            onChange={this.onChange}
                            className={classnames(
                              "form-control form-control-lg",
                              {
                                "is-invalid": errors.perFat
                              }
                            )}
                          />
                          {errors.perFat && (
                            <div className="invalid-feedback">
                              {errors.perFat}
                            </div>
                          )}
                        </div>

                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="prepend">
                              Carb:
                            </span>
                          </div>
                          <input
                            id="modelInput"
                            type="text"
                            name="perCarbs"
                            placeholder="Enter Carbs"
                            value={perCarbs}
                            onChange={this.onChange}
                            className={classnames(
                              "form-control form-control-lg",
                              {
                                "is-invalid": errors.perCarbs
                              }
                            )}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">g</span>
                          </div>
                          {errors.perCarbs && (
                            <div className="invalid-feedback">
                              {errors.perCarbs}
                            </div>
                          )}
                        </div>

                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="prepend">
                              Protein:
                            </span>
                          </div>
                          <input
                            id="modelInput"
                            type="text"
                            name="perProtein"
                            value={perProtein}
                            placeholder="Enter protein"
                            onChange={this.onChange}
                            className={classnames(
                              "form-control form-control-lg",
                              {
                                "is-invalid": errors.perProtein
                              }
                            )}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">g</span>
                          </div>
                          {errors.perProtein && (
                            <div className="invalid-feedback">
                              {errors.perProtein}
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
