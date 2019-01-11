import React, { Component } from "react";
import { Consumer } from "../Context";
import classnames from "classnames";
import uuid from "uuid";

class AddEntry extends Component {
  state = {
    id: uuid(),
    name: "",
    perFat: "",
    percarb: "",
    perProtein: "",
    size: "",
    servings: "",
    calories: "200",
    errors: {}
  };

  // calculate = (fatPerservings, carbPerservings, proteinPerservings, servings) => {
  // const fat = this.state.servings.fatPerservings * this.state.servings.servings;
  // const carb =
  //   this.state.servings.carbPerservings * this.state.servings.servings;
  // const protein =
  //   this.state.servings.proteinPerservings * this.state.servings.servings;
  //   this.setState({
  //     fat: { fat },
  //     carb: { carb },
  //     protein: { protein }
  //   });
  //   console.log(this.state);
  // };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const {
      name,
      size,
      servings,
      perFat,
      percarb,
      perProtein,
      id,
      calories
    } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Entry name is required" } });
      return;
    }
    if (size === "") {
      this.setState({ errors: { size: "servings size is required" } });
      return;
    }
    if (servings === "") {
      this.setState({ errors: { servings: "servings is required" } });
      return;
    }
    //   if (perFat == "") {
    //     this.setState({ errors: { perFat: "Fat is required" } });
    //     return;
    //   }
    //   if (percarb == "") {
    //     this.setState({ errors: { percarb: "carb is required" } });
    //     return;
    //   }
    //   if (perProtein == "") {
    //     this.setState({ errors: { perProtein: "Protein is required" } });
    //     return;
    //   }
    let fat = perFat * servings;
    let carb = percarb * servings;
    let protein = perProtein * servings;

    const newEntry = {
      id,
      name,
      servings,
      fat: { fat },
      carb: { carb },
      protein: { protein },
      calories
    };

    dispatch({ type: "ADD_ENTRY", payload: newEntry });

    this.setState({
      id: "",
      name: "",
      perFat: "",
      percarb: "",
      perProtein: "",
      size: "",
      servings: "",
      fat: "",
      carb: "",
      protein: "",
      errors: {}
    });
    //clear state

    console.log(fat);
  };

  render() {
    const {
      name,
      perFat,
      percarb,
      perProtein,
      size,
      servings,
      errors
    } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">Add Entry</div>

                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="form group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Entry Name"
                          value={name}
                          onChange={this.onChange}
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.name
                            }
                          )}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            servings Size:
                          </span>
                        </div>

                        <input
                          type="text"
                          name="size"
                          value={size}
                          onChange={this.onChange}
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.size
                            }
                          )}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">g</span>
                        </div>
                        {errors.size && (
                          <div className="invalid-feedback">{errors.size}</div>
                        )}
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">servings:</span>
                        </div>

                        <input
                          type="text"
                          name="servings"
                          value={servings}
                          onChange={this.onChange}
                          placeholder="1,2,3,4,..."
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.servings
                            }
                          )}
                        />
                        {errors.servings && (
                          <div className="invalid-feedback">
                            {errors.servings}
                          </div>
                        )}
                      </div>

                      <label htmlFor="gramsPerservings">
                        Grams per servings
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Fat:</span>
                        </div>
                        <input
                          type="text"
                          name="perFat"
                          className="form-control"
                          value={perFat}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Carb:</span>
                        </div>
                        <input
                          type="text"
                          name="percarb"
                          className="form-control"
                          value={percarb}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Protein:</span>
                        </div>
                        <input
                          type="text"
                          name="perProtein"
                          className="form-control"
                          value={perProtein}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>

                    <input
                      type="submit"
                      value="Add Entry"
                      className="btn btn-block btn-light"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddEntry;
