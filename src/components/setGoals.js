import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { Consumer } from "./../Context";
import InputList from "./layout/InputList";
import Prepend from "./layout/prepend";
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
              <button
                className="btn btn-danger bold-text"
                onClick={this.onOpenModal}
              >
                Add Goal
              </button>
              <Modal open={open} onClose={this.onCloseModal} little>
                <div className="card mb-3">
                  <div className="card-header bold-text ">Set goal</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <div className="form group">
                        <div className="input-group mb-3">
                          <Prepend name="Fat" />

                          <InputList
                            name="perFat"
                            value={perFat}
                            change={this.onChange}
                            errors={errors.perFat}
                            placeholder="fat"
                          />
                        </div>

                        <div className="input-group mb-3">
                          <Prepend name="Carb" />

                          <InputList
                            name="perCarbs"
                            value={perCarbs}
                            change={this.onChange}
                            errors={errors.perCarbs}
                            placeholder="carbs"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <Prepend name="Protein" />

                          <InputList
                            name="perProtein"
                            value={perProtein}
                            change={this.onChange}
                            errors={errors.perProtein}
                            placeholder="protein"
                          />
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
